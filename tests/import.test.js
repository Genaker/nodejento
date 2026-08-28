const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const { Op } = require('sequelize');
const { skipUnlessDbReachable } = require('./helpers');
const { getModels, getSequelize } = require('../config/db');

const SKU_PREFIX = 'NODEJENTO-TEST-';
const FIXTURE = path.join(__dirname, 'fixtures', 'synthetic_products.csv');
const IMPORTER = path.join(__dirname, '..', 'import_products.js');
const NODE_BIN = process.execPath;

async function deleteFixtureProducts(models) {
  const ids = (
    await models.CatalogProductEntity.findAll({
      where: { sku: { [Op.like]: `${SKU_PREFIX}%` } },
      attributes: ['entity_id'],
      raw: true,
    })
  ).map((r) => r.entity_id);
  if (!ids.length) return;
  for (const tableName of [
    'CatalogProductEntityVarchar',
    'CatalogProductEntityInt',
    'CatalogProductEntityDecimal',
    'CatalogProductEntityText',
    'CatalogProductEntityDatetime',
  ]) {
    await models[tableName].destroy({ where: { entity_id: { [Op.in]: ids } } });
  }
  await models.CatalogProductEntity.destroy({ where: { entity_id: { [Op.in]: ids } } });
}

function runImporter(...args) {
  try {
    const stdout = execFileSync(NODE_BIN, [IMPORTER, ...args], {
      cwd: path.join(__dirname, '..'),
      encoding: 'utf8',
    });
    return { code: 0, stdout };
  } catch (err) {
    return { code: err.status ?? 1, stdout: err.stdout ? err.stdout.toString() : '', stderr: err.stderr ? err.stderr.toString() : '' };
  }
}

test('import creates products and EAV values', async (t) => {
  if (!(await skipUnlessDbReachable(t))) return;
  const models = getModels();
  await deleteFixtureProducts(models);
  try {
    const result = runImporter(FIXTURE, '--batch-size', '500');
    assert.equal(result.code, 0, result.stderr);
    assert.match(result.stdout, /20 created, 0 updated/);

    const count = await models.CatalogProductEntity.count({ where: { sku: { [Op.like]: `${SKU_PREFIX}%` } } });
    assert.equal(count, 20);
  } finally {
    await deleteFixtureProducts(models);
  }
});

test('reimport updates in place instead of duplicating', async (t) => {
  if (!(await skipUnlessDbReachable(t))) return;
  const models = getModels();
  await deleteFixtureProducts(models);
  try {
    runImporter(FIXTURE, '--batch-size', '500');
    const second = runImporter(FIXTURE, '--batch-size', '500');
    assert.equal(second.code, 0, second.stderr);
    assert.match(second.stdout, /0 created, 20 updated/);

    const ids = (
      await models.CatalogProductEntity.findAll({
        where: { sku: { [Op.like]: `${SKU_PREFIX}%` } },
        attributes: ['entity_id'],
        raw: true,
      })
    ).map((r) => r.entity_id);
    const productCount = ids.length;
    const varcharCount = await models.CatalogProductEntityVarchar.count({ where: { entity_id: { [Op.in]: ids } } });

    assert.equal(productCount, 20, 'second import must not create duplicate entities');
    assert.equal(varcharCount, 60, 'upsert must update rows in place (3 varchar attrs x 20 products)');
  } finally {
    await deleteFixtureProducts(models);
  }
});

test('missing file fails cleanly', async (t) => {
  if (!(await skipUnlessDbReachable(t))) return;
  const result = runImporter('/nonexistent/path.csv');
  assert.notEqual(result.code, 0);
});

test.after(async () => {
  await getSequelize().close();
});
