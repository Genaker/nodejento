#!/usr/bin/env node
// Magmi-style bulk CSV importer, matching the batching pattern used by every
// other implementation in this project family (Go, Rust, Laravel, PyGento):
// resolve existing SKUs in one batch, bulk-insert new entities relying on
// InnoDB's consecutive-auto-increment-lock guarantee for a single multi-row
// INSERT, then batch-upsert each EAV value table via one
// INSERT ... ON DUPLICATE KEY UPDATE statement per chunk.
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');
const { Op, QueryTypes } = require('sequelize');
const { getSequelize, getLiteModels } = require('./config/db');

const BACKEND_TABLE = {
  varchar: 'CatalogProductEntityVarchar',
  int: 'CatalogProductEntityInt',
  decimal: 'CatalogProductEntityDecimal',
  text: 'CatalogProductEntityText',
  datetime: 'CatalogProductEntityDatetime',
};

const REQUIRED_MODELS = ['CatalogProductEntity', 'EavAttribute', ...Object.values(BACKEND_TABLE)];

function parseArgs(argv) {
  const args = { batchSize: 500, store: 0, attributeSet: 4 };
  const positional = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--batch-size') args.batchSize = Number(argv[++i]);
    else if (a === '--store') args.store = Number(argv[++i]);
    else if (a === '--attribute-set') args.attributeSet = Number(argv[++i]);
    else positional.push(a);
  }
  args.file = positional[0];
  return args;
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function loadAttributes(models, codes) {
  const rows = await models.EavAttribute.findAll({
    where: { entity_type_id: 4, attribute_code: { [Op.in]: codes } },
    attributes: ['attribute_id', 'attribute_code', 'backend_type'],
    raw: true,
  });
  const byCode = {};
  rows.forEach((r) => {
    byCode[r.attribute_code] = { id: r.attribute_id, backendType: r.backend_type };
  });
  return byCode;
}

async function lookupExistingSkus(models, skus) {
  const found = {};
  for (const part of chunk(skus, 500)) {
    const rows = await models.CatalogProductEntity.findAll({
      where: { sku: { [Op.in]: part } },
      attributes: ['entity_id', 'sku'],
      raw: true,
    });
    rows.forEach((r) => {
      found[r.sku] = r.entity_id;
    });
  }
  return found;
}

async function insertNewProducts(sequelize, rows, attributeSet) {
  if (!rows.length) return {};
  const skuToId = {};
  for (const part of chunk(rows, 500)) {
    const now = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const placeholders = part.map(() => '(?, ?, ?, ?, ?, ?)').join(', ');
    const values = [];
    part.forEach((r) => {
      values.push(r.sku, attributeSet, 'simple', now, now, 0);
    });
    await sequelize.query(
      `INSERT INTO catalog_product_entity
         (sku, attribute_set_id, type_id, created_at, updated_at, has_options)
       VALUES ${placeholders}`,
      { replacements: values, type: QueryTypes.INSERT }
    );
    const [[{ id: lastId }]] = await sequelize.query('SELECT LAST_INSERT_ID() AS id', {
      raw: true,
    });
    // MySQL/InnoDB guarantees consecutive auto-increment ids for the rows of
    // a single bulk INSERT statement (with the default innodb_autoinc_lock_mode) --
    // the same first_id + offset trick used by every other importer here.
    part.forEach((r, i) => {
      skuToId[r.sku] = Number(lastId) + i;
    });
  }
  return skuToId;
}

async function upsertEavTable(sequelize, models, modelName, rows, batchSize) {
  if (!rows.length) return;
  const model = models[modelName];
  for (const part of chunk(rows, batchSize)) {
    await sequelize.transaction(async (t) => {
      await model.bulkCreate(part, {
        // Without an explicit `fields` list, bulkCreate includes every
        // model-defined column, so the autoIncrement `value_id` PK was
        // showing up as a literal NULL in every row of the generated
        // INSERT (confirmed via the real SQL text) -- harmless (MySQL
        // auto-generates it either way) but a wider statement for nothing.
        fields: ['entity_id', 'attribute_id', 'store_id', 'value'],
        updateOnDuplicate: ['value'],
        transaction: t,
      });
    });
  }
}

async function run() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.file || !fs.existsSync(args.file)) {
    console.error(`File not found: ${args.file}`);
    process.exit(1);
  }

  const startTotal = process.hrtime.bigint();
  const csvContent = fs.readFileSync(path.resolve(args.file), 'utf8');
  const records = parse(csvContent, { columns: true, skip_empty_lines: true });

  const sequelize = getSequelize();
  const models = getLiteModels(REQUIRED_MODELS);
  await sequelize.authenticate();

  const attributeCodes = Object.keys(records[0]).filter((c) => c !== 'sku');
  const attributes = await loadAttributes(models, attributeCodes);

  const startProcess = process.hrtime.bigint();
  const skus = records.map((r) => r.sku);
  const existing = await lookupExistingSkus(models, skus);

  const toInsert = records.filter((r) => !(r.sku in existing));
  const newIds = await insertNewProducts(sequelize, toInsert, args.attributeSet);

  const bucketed = {};
  Object.values(BACKEND_TABLE).forEach((m) => {
    bucketed[m] = [];
  });

  let eavRowCount = 0;
  for (const record of records) {
    const entityId = existing[record.sku] ?? newIds[record.sku];
    for (const code of attributeCodes) {
      const attr = attributes[code];
      if (!attr) continue;
      const tableModel = BACKEND_TABLE[attr.backendType];
      if (!tableModel) continue;
      const value = record[code];
      if (value === undefined || value === '') continue;
      bucketed[tableModel].push({
        entity_id: entityId,
        attribute_id: attr.id,
        store_id: args.store,
        value,
      });
      eavRowCount += 1;
    }
  }

  const startDb = process.hrtime.bigint();
  for (const [modelName, rows] of Object.entries(bucketed)) {
    await upsertEavTable(sequelize, models, modelName, rows, args.batchSize);
  }
  const endDb = process.hrtime.bigint();

  const created = toInsert.length;
  const updated = records.length - created;
  const totalMs = Number(process.hrtime.bigint() - startTotal) / 1e6;
  const processMs = Number(startDb - startProcess) / 1e6;
  const dbMs = Number(endDb - startDb) / 1e6;

  console.log(`${created} created, ${updated} updated`);
  console.log(`Rows: ${records.length}`);
  console.log(`Products: ${records.length}`);
  console.log(`EAV rows: ${eavRowCount}`);
  console.log(`Total time: ${totalMs.toFixed(0)}ms`);
  console.log(`Processing: ${processMs.toFixed(0)}ms`);
  console.log(`DB time: ${dbMs.toFixed(0)}ms`);

  await sequelize.close();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
