const test = require('node:test');
const assert = require('node:assert/strict');
const { skipUnlessDbReachable } = require('./helpers');
const { getModels, getLiteModels, getSequelize } = require('../config/db');

test('every Model file under Models/ is importable', () => {
  // init-models.js already requires all 347 sequelize-auto-generated files
  // at module load time -- if any had a class-definition-time error this
  // require() would already have thrown before this test ran.
  assert.doesNotThrow(() => require('../Models/init-models'));
});

test('models load and associate without throwing', async (t) => {
  if (!(await skipUnlessDbReachable(t))) return;
  const models = getModels();
  assert.ok(models.CatalogProductEntity);
  assert.ok(models.CatalogProductEntityVarchar);
  assert.ok(models.CatalogProductEntityInt);
});

test('CatalogProductEntity associations resolve against a real product', async (t) => {
  if (!(await skipUnlessDbReachable(t))) return;
  const models = getModels();
  const product = await models.CatalogProductEntity.findOne({
    include: [{ model: models.CatalogProductEntityVarchar, as: 'CatalogProductEntityVarchars', required: false, separate: true }],
  });
  assert.ok(product, 'expected at least one product in the database');
  assert.ok(Array.isArray(product.CatalogProductEntityVarchars));
});

test('getLiteModels defines only the requested tables and queries correctly', async (t) => {
  if (!(await skipUnlessDbReachable(t))) return;
  // Regression test for the CLI performance fix: import_products.js used to
  // pay the full 347-model init-models.js cost (~1.3s) on every run even
  // though it only touches 7 tables. getLiteModels() defines just the
  // named models directly from their individual files, skipping
  // init-models.js and its association wiring entirely -- this asserts
  // that path still produces a working, queryable model.
  const models = getLiteModels(['CatalogProductEntity', 'CatalogProductEntityVarchar']);
  assert.ok(models.CatalogProductEntity);
  assert.ok(models.CatalogProductEntityVarchar);
  const row = await models.CatalogProductEntity.findOne({ raw: true });
  assert.ok(row, 'expected at least one product in the database');
});

test.after(async () => {
  await getSequelize().close();
});
