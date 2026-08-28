const { Op } = require('sequelize');

const PRODUCT_ENTITY_TYPE_ID = 4;
const CATEGORY_ENTITY_TYPE_ID = 3;

const PRODUCT_VALUE_TABLES = [
  'CatalogProductEntityVarchar',
  'CatalogProductEntityInt',
  'CatalogProductEntityDecimal',
  'CatalogProductEntityText',
  'CatalogProductEntityDatetime',
];

const CATEGORY_VALUE_TABLES = [
  'CatalogCategoryEntityVarchar',
  'CatalogCategoryEntityInt',
  'CatalogCategoryEntityDecimal',
  'CatalogCategoryEntityText',
  'CatalogCategoryEntityDatetime',
];

// Keyed by entityTypeId -- 'name' has a different attribute_id for products
// (entity_type_id=4) than for categories (entity_type_id=3), and each type
// has its own set of *_entity_varchar/int/... value tables. An earlier
// version of this file had one shared cache and one shared flatten()
// reused for both products and categories; since product and category
// entity_ids overlap numerically, that silently returned a *product's*
// "name" for a category page instead of failing loudly.
const attributeIdCacheByType = { [PRODUCT_ENTITY_TYPE_ID]: {}, [CATEGORY_ENTITY_TYPE_ID]: {} };

async function resolveAttributeIds(models, codes, entityTypeId) {
  const cache = attributeIdCacheByType[entityTypeId];
  const uncached = codes.filter((c) => !(c in cache));
  if (uncached.length) {
    const rows = await models.EavAttribute.findAll({
      where: { entity_type_id: entityTypeId, attribute_code: { [Op.in]: uncached } },
      attributes: ['attribute_id', 'attribute_code'],
      raw: true,
    });
    rows.forEach((r) => {
      cache[r.attribute_code] = r.attribute_id;
    });
  }
  return codes.map((c) => cache[c]).filter((id) => id !== undefined);
}

async function flattenEntities(models, entityIds, codes, { entityTypeId, valueTables, storeId }) {
  const result = {};
  if (!entityIds.length) return result;
  entityIds.forEach((id) => {
    result[id] = {};
  });

  const attributeIds = await resolveAttributeIds(models, codes, entityTypeId);
  if (!attributeIds.length) return result;
  const cache = attributeIdCacheByType[entityTypeId];

  // One query per EAV value table for the whole batch of entityIds, never
  // one query per entity -- the N+1 shape found (and fixed) in laragento's
  // CategoryController is exactly what this guards against here.
  for (const modelName of valueTables) {
    const rows = await models[modelName].findAll({
      where: {
        entity_id: { [Op.in]: entityIds },
        attribute_id: { [Op.in]: attributeIds },
        store_id: { [Op.in]: [0, storeId] },
      },
      raw: true,
    });
    rows.forEach((row) => {
      const code = Object.keys(cache).find((c) => cache[c] === row.attribute_id);
      if (!code) return;
      // store-specific values win over the store_id=0 default, matching
      // Magento's own EAV fallback rule.
      if (row.store_id === storeId || result[row.entity_id][code] === undefined) {
        result[row.entity_id][code] = row.value;
      }
    });
  }
  return result;
}

function flattenProducts(models, entityIds, codes, storeId = 0) {
  return flattenEntities(models, entityIds, codes, {
    entityTypeId: PRODUCT_ENTITY_TYPE_ID,
    valueTables: PRODUCT_VALUE_TABLES,
    storeId,
  });
}

function flattenCategories(models, entityIds, codes, storeId = 0) {
  return flattenEntities(models, entityIds, codes, {
    entityTypeId: CATEGORY_ENTITY_TYPE_ID,
    valueTables: CATEGORY_VALUE_TABLES,
    storeId,
  });
}

async function flattenProduct(models, entityId, codes, storeId = 0) {
  const all = await flattenProducts(models, [entityId], codes, storeId);
  return all[entityId] || {};
}

async function flattenCategory(models, entityId, codes, storeId = 0) {
  const all = await flattenCategories(models, [entityId], codes, storeId);
  return all[entityId] || {};
}

module.exports = {
  flattenProducts,
  flattenProduct,
  flattenCategories,
  flattenCategory,
  PRODUCT_VALUE_TABLES,
  CATEGORY_VALUE_TABLES,
};
