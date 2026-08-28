require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

let sequelizeInstance = null;
let modelsInstance = null;
const liteModelsCache = {};

function getSequelize() {
  if (!sequelizeInstance) {
    sequelizeInstance = new Sequelize(
      process.env.DB_NAME || 'magento',
      process.env.DB_USER || 'magento',
      process.env.DB_PASSWORD || 'magento',
      {
        host: process.env.DB_HOST || '127.0.0.1',
        port: Number(process.env.DB_PORT) || 3306,
        dialect: 'mysql',
        freezeTableName: true,
        logging: false,
        pool: { max: 15, min: 2, acquire: 30000, idle: 10000 },
      }
    );
  }
  return sequelizeInstance;
}

// The full graph: `Models/init-models.js` requires all 347
// sequelize-auto-generated files and sequelize.define()s + associates every
// one of them, whether or not the caller touches them -- measured at ~1.7s
// (428ms require + 1.3s define/associate) on this project's Models/
// directory. That's a fixed cost worth paying once for a long-lived process
// (the storefront in server.js loads it once and keeps it in memory for the
// life of the process), but it's dead weight paid on *every* invocation of
// a short-lived CLI process like import_products.js, which only ever
// touches 7 of the 347 tables.
function getModels() {
  if (!modelsInstance) {
    const initModels = require('../Models/init-models');
    modelsInstance = initModels(getSequelize());
  }
  return modelsInstance;
}

// Defines only the named models directly from their individual
// sequelize-auto files (each is a self-contained `(sequelize, DataTypes) =>
// sequelize.define(...)` factory with no cross-file requires), skipping
// init-models.js and its association wiring entirely. Verified this drops
// model-loading from ~1.7s to ~25ms for the 7 tables import_products.js
// needs. No associations are defined this way -- fine for code that
// queries with explicit `where` clauses (as the importer and utils/eav.js
// do), not for code that calls relationship methods like
// `product.getCatalogProductEntityVarchars()`.
function getLiteModels(names) {
  const sequelize = getSequelize();
  const result = {};
  names.forEach((name) => {
    if (!liteModelsCache[name]) {
      liteModelsCache[name] = require(`../Models/${name}`)(sequelize, DataTypes);
    }
    result[name] = liteModelsCache[name];
  });
  return result;
}

module.exports = { getSequelize, getModels, getLiteModels };
