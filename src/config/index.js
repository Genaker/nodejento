require('dotenv').config();

module.exports = {
  // Database configuration
  database: {
    host: process.env.DB_HOST || '127.0.0.1',
    port: parseInt(process.env.DB_PORT || '3306', 10),
    database: process.env.DB_NAME || 'magento',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    dialect: 'mysql',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    freezeTableName: true,
    pool: {
      max: parseInt(process.env.DB_POOL_MAX || '15', 10),
      min: parseInt(process.env.DB_POOL_MIN || '2', 10),
      acquire: parseInt(process.env.DB_POOL_ACQUIRE || '30000', 10),
      idle: parseInt(process.env.DB_POOL_IDLE || '10000', 10)
    }
  },

  // Server configuration
  server: {
    port: parseInt(process.env.PORT || '3000', 10),
    env: process.env.NODE_ENV || 'development'
  },

  // Magento configuration
  magento: {
    basePath: process.env.MAGENTO_BASE_PATH || '/var/www/html/magento/'
  },

  // Application configuration
  app: {
    cacheEnabled: process.env.CACHE_ENABLED === 'true',
    logLevel: process.env.LOG_LEVEL || 'info',
    debug: process.env.DEBUG === 'true'
  }
};
