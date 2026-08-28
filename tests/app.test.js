const test = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const { skipUnlessDbReachable } = require('./helpers');
const { getSequelize } = require('../config/db');

function fakeAttrValue(attributeId, storeId, value) {
  return { dataValues: { attribute_id: attributeId, store_id: storeId, value } };
}

test('transpond() does not crash on a product with tier prices', async (t) => {
  if (!(await skipUnlessDbReachable(t))) return;
  // Regression test for a real bug in the original transpond(): it wrote to
  // dataValues.tier_price = {} but then pushed onto product.tier_price
  // (missing the dataValues prefix), which was always undefined -- any
  // product with tier prices crashed transpond() with a TypeError.
  const appModule = require('../app');
  await appModule.ready;
  const { transpond } = appModule;

  const product = {
    dataValues: { entity_id: 1, sku: 'TEST-SKU' },
    CatalogProductEntityVarchars: [],
    CatalogProductEntityInts: [],
    CatalogProductEntityTexts: [],
    CatalogProductEntityDecimals: [],
    CatalogProductEntityDatetimes: [],
    CatalogProductEntityTierPrices: [{ dataValues: { qty: 1, value: 9.99 } }],
  };

  assert.doesNotThrow(() => transpond(product));
  assert.ok(Array.isArray(product.dataValues.tier_price));
  assert.equal(product.dataValues.tier_price.length, 1);
});

test('/nodejento caches by request URL and serves the cached response on the second call', async (t) => {
  if (!(await skipUnlessDbReachable(t))) return;
  const { app } = require('../app');
  const server = http.createServer(app);
  await new Promise((resolve) => server.listen(0, resolve));
  const port = server.address().port;

  const get = (p) =>
    new Promise((resolve, reject) => {
      http.get(`http://127.0.0.1:${port}${p}`, (res) => {
        let body = '';
        res.on('data', (c) => (body += c));
        res.on('end', () => resolve({ status: res.statusCode, body }));
      }).on('error', reject);
    });

  try {
    const first = await get('/nodejento');
    const second = await get('/nodejento');
    // Before the fix, the cache was written under the `req` object (always
    // "[object Object]") but read under `req.url`, so it never hit; a fixed
    // cache additionally needs the `return` after res.send() so a hit
    // doesn't fall through and double-send.
    assert.equal(first.status, 200);
    assert.equal(second.status, 200);
    assert.equal(first.body, second.body);
  } finally {
    server.close();
  }
});

test.after(async () => {
  await getSequelize().close();
});
