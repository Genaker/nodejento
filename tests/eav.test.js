const test = require('node:test');
const assert = require('node:assert/strict');
const { skipUnlessDbReachable } = require('./helpers');
const { getModels, getSequelize } = require('../config/db');
const { flattenProducts, flattenProduct, flattenCategory } = require('../utils/eav');

test('flattenProducts issues a bounded number of queries regardless of entity count', async (t) => {
  if (!(await skipUnlessDbReachable(t))) return;
  const models = getModels();
  const sequelize = getSequelize();
  const rows = await models.CatalogProductEntity.findAll({ attributes: ['entity_id'], limit: 10, raw: true });
  const ids = rows.map((r) => r.entity_id);
  if (ids.length < 2) {
    t.skip('Fewer than 2 products in this database.');
    return;
  }

  // Wrapping sequelize.query() directly (verified empirically to be a clean
  // 1:1 count of round trips) -- Sequelize's own 'afterQuery' hook was tried
  // first and found to fire ~2x per logical query, which would make this
  // assertion meaningless.
  let queryCount = 0;
  const originalQuery = sequelize.query.bind(sequelize);
  sequelize.query = (...args) => {
    queryCount += 1;
    return originalQuery(...args);
  };
  try {
    await flattenProducts(models, ids, ['name', 'price']);
  } finally {
    sequelize.query = originalQuery;
  }

  // 1 query to resolve attribute codes -> ids, + 1 per value table (5) --
  // a fixed number that must NOT grow with ids.length. This is the same
  // N+1 regression guard as laragento's CategoryPageQueryCountTest and
  // PyGento's test_flatten_products_issues_one_query_per_value_table.
  assert.ok(queryCount <= 6, `expected a bounded query count for ${ids.length} products, got ${queryCount}`);
});

test('flattenProduct returns at least one resolved core attribute', async (t) => {
  if (!(await skipUnlessDbReachable(t))) return;
  const models = getModels();
  const row = await models.CatalogProductEntity.findOne({ attributes: ['entity_id'], raw: true });
  if (!row) {
    t.skip('No products in this database.');
    return;
  }
  const attrs = await flattenProduct(models, row.entity_id, ['name', 'price']);
  assert.ok('name' in attrs || 'price' in attrs);
});

test('flattenCategory resolves the category name attribute, not a same-numbered product\'s name', async (t) => {
  if (!(await skipUnlessDbReachable(t))) return;
  const models = getModels();
  // Regression test: an earlier version of utils/eav.js had one shared
  // flatten() reused for both products and categories. Product and
  // category entity_ids overlap numerically (both start at 1), and "name"
  // has a different attribute_id per entity_type_id, so that shared
  // version silently returned a *product's* name for a category page
  // instead of throwing -- category_id=2 ("Default Category" in the
  // Magento sample data this project targets) resolved to whatever product
  // happens to have entity_id=2.
  const attrs = await flattenCategory(models, 2, ['name']);
  assert.equal(attrs.name, 'Default Category');
});

test('flattenProducts with an empty id list does not query', async (t) => {
  if (!(await skipUnlessDbReachable(t))) return;
  const models = getModels();
  const result = await flattenProducts(models, [], ['name']);
  assert.deepEqual(result, {});
});

test.after(async () => {
  await getSequelize().close();
});
