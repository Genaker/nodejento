require('dotenv').config();
const express = require('express');
const { Op } = require('sequelize');
const { getSequelize, getModels } = require('./config/db');
const { flattenProducts, flattenProduct, flattenCategories } = require('./utils/eav');

const app = express();
app.set('view engine', 'ejs');

const PAGE_SIZE = 12;
const PRODUCT_CODES = ['name', 'price'];
const CATEGORY_ROOT_IDS = new Set([1, 2]);

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

app.get('/', async (req, res, next) => {
  try {
    const models = getModels();
    const categories = await models.CatalogCategoryEntity.findAll({
      where: { level: 2 },
      attributes: ['entity_id'],
      raw: true,
    });
    const categoryIds = categories.map((c) => c.entity_id);
    const names = await flattenCategories(models, categoryIds, ['name']);
    const catRows = categoryIds.map((id) => ({ entity_id: id, name: names[id] && names[id].name }));

    const productCount = await models.CatalogProductEntity.count();
    res.render('home', { categories: catRows, productCount });
  } catch (err) {
    next(err);
  }
});

app.get('/category/:id', async (req, res, next) => {
  try {
    const models = getModels();
    const categoryId = Number(req.params.id);
    const page = Math.max(1, Number(req.query.page) || 1);

    const category = await models.CatalogCategoryEntity.findByPk(categoryId, { raw: true });
    if (!category) return res.status(404).send('Category not found');

    // Real DB-level LIMIT/OFFSET, not fetch-all-then-slice-in-memory -- the
    // in-memory-pagination antipattern found (and fixed) in laragento's
    // original CategoryController is exactly what this avoids.
    const totalLinks = await models.CatalogCategoryProduct.count({ where: { category_id: categoryId } });
    const totalPages = Math.max(1, Math.ceil(totalLinks / PAGE_SIZE));
    const links = await models.CatalogCategoryProduct.findAll({
      where: { category_id: categoryId },
      attributes: ['product_id'],
      order: [['position', 'ASC']],
      limit: PAGE_SIZE,
      offset: (page - 1) * PAGE_SIZE,
      raw: true,
    });
    const pageIds = links.map((l) => l.product_id);

    const products = await models.CatalogProductEntity.findAll({
      where: { entity_id: { [Op.in]: pageIds } },
      attributes: ['entity_id', 'sku'],
      raw: true,
    });
    const attrs = await flattenProducts(models, pageIds, PRODUCT_CODES);
    const byId = {};
    products.forEach((p) => {
      byId[p.entity_id] = p;
    });
    const ordered = pageIds
      .filter((id) => byId[id])
      .map((id) => ({ ...byId[id], attrs: attrs[id] || {} }));

    const catNames = await flattenCategories(models, [categoryId], ['name']);
    res.render('category', {
      category: { entity_id: categoryId, name: catNames[categoryId] && catNames[categoryId].name },
      products: ordered,
      page,
      totalPages,
    });
  } catch (err) {
    next(err);
  }
});

app.get('/product/:id', async (req, res, next) => {
  try {
    const models = getModels();
    const entityId = Number(req.params.id);
    const product = await models.CatalogProductEntity.findByPk(entityId, { raw: true });
    if (!product) return res.status(404).send('Product not found');

    const attrs = await flattenProduct(models, entityId, [...PRODUCT_CODES, 'description']);
    const descriptionHtml = escapeHtml(attrs.description || '').replace(/\n/g, '<br>\n');

    const breadcrumbs = [];
    const links = await models.CatalogCategoryProduct.findAll({
      where: { product_id: entityId },
      attributes: ['category_id'],
      raw: true,
    });
    if (links.length) {
      const catId = links[0].category_id;
      if (!CATEGORY_ROOT_IDS.has(catId)) {
        const names = await flattenCategories(models, [catId], ['name']);
        breadcrumbs.push({ entity_id: catId, name: (names[catId] && names[catId].name) || `Category #${catId}` });
      }
    }

    res.render('product', {
      product: { entity_id: entityId, sku: product.sku, attrs },
      descriptionHtml,
      breadcrumbs,
    });
  } catch (err) {
    next(err);
  }
});

if (require.main === module) {
  const port = Number(process.env.PORT) || 3000;
  const sequelize = getSequelize();
  sequelize
    .authenticate()
    .then(() => {
      app.listen(port, () => console.log(`NodeJento storefront listening at http://localhost:${port}`));
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err.message);
      process.exit(1);
    });
}

module.exports = app;
