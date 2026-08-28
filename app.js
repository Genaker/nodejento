require('dotenv').config();
const express = require('express');
const { QueryTypes } = require('sequelize');
const { getSequelize, getModels } = require('./config/db');

const sequelize = getSequelize();
const models = getModels();

const app = express();
const port = Number(process.env.PORT) || 3000;
const debug = false;

const CatalogProductEntity = models.CatalogProductEntity;

const requestCache = {};

let EAV = {};
let EavOptionsValues = {};
let VisibleOnFront = [];

// Bugfix: the route handler used to read these globals before this promise
// resolved (a startup race condition -- the first request(s) after boot
// would crash with "Cannot read properties of undefined"). `ready` lets the
// handler explicitly wait for warm-up instead of racing it.
const ready = (async () => {
  const [eavRows, visibleRows, optionValues] = await Promise.all([
    models.EavAttribute.findAll({ where: { entity_type_id: 4 }, raw: true }),
    sequelize.query(
      'select attribute_id from catalog_eav_attribute where is_visible_on_front = 1 or is_html_allowed_on_front = 1 or is_visible = 1',
      { type: QueryTypes.SELECT }
    ),
    // Loads the whole option-value table once at boot (same idea as
    // Magento's own EAV option cache) -- fixed from a leftover, misleading
    // "where value_id" clause that looked like a filter but, as a MySQL
    // boolean-context truthiness check, excluded nothing.
    sequelize.query('select * from eav_attribute_option_value', { type: QueryTypes.SELECT }),
  ]);

  EAV = { id_code: {} };
  eavRows.forEach((a) => {
    EAV.id_code['attr_' + a.attribute_id] = { code: a.attribute_code, data: a };
  });
  console.log('Attribute count: ' + eavRows.length);

  EavOptionsValues = {};
  optionValues.forEach((v) => {
    if (!EavOptionsValues[v.value_id]) EavOptionsValues[v.value_id] = {};
    EavOptionsValues[v.value_id][v.store_id] = v;
  });

  VisibleOnFront = visibleRows.map((v) => v.attribute_id);
})();

app.get('/nodejento', async (req, res) => {
  await ready;
  const reqId = Date.now() % 1000;
  console.time('request-' + reqId);

  if (Object.prototype.hasOwnProperty.call(requestCache, req.url)) {
    console.timeEnd('request-' + reqId);
    res.send(requestCache[req.url]);
    return;
  }

  console.time('ORM-' + reqId);
  const Product = await CatalogProductEntity.findAll({
    where: { sku: ['24-MB01', '24-MB04', '24-WG084', '24-WG085'] },
    include: [
      {
        model: models.CatalogProductEntityVarchar,
        as: 'CatalogProductEntityVarchars',
        where: { attribute_id: VisibleOnFront, store_id: [0, 1] },
        required: false,
        attributes: ['store_id', 'value', 'attribute_id'],
        separate: true,
      },
      {
        model: models.CatalogProductEntityInt,
        as: 'CatalogProductEntityInts',
        where: { attribute_id: VisibleOnFront, store_id: [0, 1] },
        required: false,
        attributes: ['store_id', 'value', 'attribute_id'],
        separate: true,
      },
      {
        model: models.CatalogProductEntityText,
        as: 'CatalogProductEntityTexts',
        where: { attribute_id: VisibleOnFront, store_id: [0, 1] },
        required: false,
        attributes: ['store_id', 'value', 'attribute_id'],
        separate: true,
      },
      {
        model: models.CatalogProductEntityDecimal,
        as: 'CatalogProductEntityDecimals',
        where: { attribute_id: VisibleOnFront, store_id: [0, 1] },
        required: false,
        attributes: ['store_id', 'value', 'attribute_id'],
        separate: true,
      },
      {
        model: models.CatalogProductEntityDatetime,
        as: 'CatalogProductEntityDatetimes',
        where: { attribute_id: VisibleOnFront, store_id: [0, 1] },
        required: false,
        attributes: ['store_id', 'value', 'attribute_id'],
        separate: true,
      },
      {
        model: models.CatalogProductEntityMediaGallery,
        required: false,
        raw: true,
        attributes: ['value', 'media_type'],
      },
      {
        model: models.CataloginventoryStockItem,
        as: 'CataloginventoryStockItems',
        required: false,
        separate: true,
      },
      {
        model: models.CatalogProductEntityTierPrice,
        as: 'CatalogProductEntityTierPrices',
        required: false,
        separate: true,
      },
    ],
  });
  console.timeEnd('ORM-' + reqId);

  const ProductIDs = Product.map((p, i) => ({ [p.entity_id]: i }));

  console.time('transpond-' + reqId);
  transpond(Product);
  console.timeEnd('transpond-' + reqId);

  const json = JSON.stringify({ result: Product, ids: ProductIDs, count: ProductIDs.length }, null, 1);
  requestCache[req.url] = json;

  console.timeEnd('request-' + reqId);
  res.send(json);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

if (require.main === module) {
  sequelize
    .authenticate()
    .then(() => ready)
    .then(() => {
      app.listen(port, () => console.log(`Magento Express app listening at http://localhost:${port}`));
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err.message);
      process.exit(1);
    });
}

function transpond(product) {
  let collection = true;
  let products = product;
  if (!Array.isArray(product)) {
    collection = false;
    products = [product];
  }

  const aliases = [
    'CatalogProductEntityVarchars',
    'CatalogProductEntityInts',
    'CatalogProductEntityTexts',
    'CatalogProductEntityDecimals',
    'CatalogProductEntityDatetimes',
  ];
  const coreAttributes = ['entity_id', 'sku', 'attribute_set_id', 'type_id', 'created_at', 'updated_at', 'has_options'];

  aliases.forEach((ormAttr) => {
    products.forEach((p, index) => {
      if (!products[index].dataValues.attributes) products[index].dataValues.attributes = {};
      coreAttributes.forEach((c) => {
        products[index].dataValues.attributes[c] = products[index].dataValues[c];
      });

      if (products[index][ormAttr]) {
        products[index][ormAttr].forEach((a) => {
          const attributeCode = EAV.id_code['attr_' + a.dataValues.attribute_id].code;

          if (!products[index].dataValues.attributes[attributeCode] || a.dataValues.store_id > 0) {
            products[index].dataValues.attributes[attributeCode] = debug
              ? a.dataValues
              : { value: a.dataValues.value };

            const attributeValue = a.dataValues.value;
            const storeId = a.dataValues.store_id;
            const meta = EAV.id_code['attr_' + a.dataValues.attribute_id].data;

            products[index].dataValues.attributes[attributeCode].frontend_input = meta.frontend_input;

            if (['select', 'multiselect'].includes(meta.frontend_input) && meta.source_model === null) {
              let resultValue = [];
              const values = String(attributeValue).split(',');
              if (values.length > 1) {
                resultValue = values
                  .map((val) => EavOptionsValues[val] && EavOptionsValues[val][storeId])
                  .filter(Boolean);
              } else if (EavOptionsValues[attributeValue]) {
                resultValue = EavOptionsValues[attributeValue][storeId];
              }
              products[index].dataValues.attributes[attributeCode].optionValues = resultValue;
            }
          }
        });
        delete products[index][ormAttr];
        delete products[index].dataValues[ormAttr];
      }
    });
  });

  products.forEach((p, index) => {
    if (products[index].CatalogProductEntityMediaGalleries) {
      products[index].dataValues.gallery = products[index].CatalogProductEntityMediaGalleries.map((gal) => {
        delete gal.dataValues.CatalogProductEntityMediaGalleryValueToEntity;
        return gal.dataValues;
      });
      delete products[index].CatalogProductEntityMediaGalleries;
      delete products[index].dataValues.CatalogProductEntityMediaGalleries;
    }

    if (products[index].CataloginventoryStockItems) {
      products[index].dataValues.stock = products[index].CataloginventoryStockItems[0]
        ? products[index].CataloginventoryStockItems[0].dataValues
        : {};
      delete products[index].CataloginventoryStockItems;
      delete products[index].dataValues.CataloginventoryStockItems;
    }

    if (products[index].CatalogProductEntityTierPrices) {
      products[index].dataValues.tier_price = products[index].CatalogProductEntityTierPrices.map((t) => t.dataValues);
      delete products[index].CatalogProductEntityTierPrices;
      delete products[index].dataValues.CatalogProductEntityTierPrices;
    }
  });

  return collection ? products : products[0];
}

module.exports = { app, transpond, ready };
