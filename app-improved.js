/**
 * NodeJento - Magento 2 NodeJS Microservice
 * Improved architecture with proper separation of concerns
 */

const express = require('express');
const { Sequelize } = require('sequelize');
const config = require('./src/config');
const magentoModels = require('./Models/init-models');
const { errorHandler, notFoundHandler, asyncHandler } = require('./src/middleware/errorHandler');
const { validate } = require('./src/middleware/validation');
const EavService = require('./src/services/EavService');
const ProductTransformer = require('./src/services/ProductTransformer');
const ProductService = require('./src/services/ProductService');
const Cache = require('./src/utils/Cache');

// Initialize Express app
const app = express();
const port = config.server.port;

// Initialize Sequelize with configuration
const sequelize = new Sequelize(config.database);

// Initialize cache
const requestCache = new Cache({
  maxSize: 100,
  defaultTTL: 300000, // 5 minutes
  enabled: config.app.cacheEnabled
});

// Initialize models
const models = magentoModels.initModels(sequelize);

// Initialize services (will be set after DB connection)
let eavService;
let productTransformer;
let productService;

// Test database connection and initialize services
sequelize
  .authenticate()
  .then(async () => {
    console.log('Database connection established successfully.');
    
    // Initialize EAV service
    eavService = new EavService(sequelize, models);
    await eavService.initialize();
    
    // Initialize product transformer with EAV config
    productTransformer = new ProductTransformer(eavService.getConfig());
    
    // Initialize product service
    productService = new ProductService(models, eavService, productTransformer);
    
    console.log('All services initialized successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    process.exit(1);
  });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    service: 'NodeJento - Magento 2 Microservice',
    version: '2.0.0',
    cache: requestCache.getStats()
  });
});

// Main product endpoint with improved error handling and caching
app.get('/nodejento', validate.storeIds, asyncHandler(async (req, res) => {
  const requestId = Date.now() % 1000;
  const cacheKey = req.url;
  
  console.time(`request-${requestId}`);

  // Check cache first
  const cachedData = requestCache.get(cacheKey);
  if (cachedData) {
    console.log(`Cache hit for request-${requestId}`);
    console.timeEnd(`request-${requestId}`);
    return res.json(cachedData);
  }

  // Default SKUs for demo (in production, these would come from query params)
  const skus = req.query.skus 
    ? req.query.skus.split(',').map(sku => sku.trim())
    : ['24-MB01', '24-MB04', '24-WG084', '24-WG085'];
  
  const storeIds = req.validatedStoreIds || [0, 1];

  console.time(`ORM-${requestId}`);
  
  // Fetch products using the service layer
  const products = await productService.getProductsBySku(skus, storeIds);
  
  console.timeEnd(`ORM-${requestId}`);

  // Prepare response
  const productIds = products.map((p, i) => ({ [p.entity_id]: i }));
  const response = {
    result: products,
    ids: productIds,
    count: products.length,
    cached: false
  };

  // Cache the response
  requestCache.set(cacheKey, response);

  console.timeEnd(`request-${requestId}`);
  res.json(response);
}));

// Product by SKU endpoint
app.get('/product/:sku', validate.productSku, validate.storeIds, asyncHandler(async (req, res) => {
  const { sku } = req.params;
  const storeIds = req.validatedStoreIds || [0, 1];

  const cacheKey = `product:${sku}:${storeIds.join(',')}`;
  
  // Check cache
  const cachedProduct = requestCache.get(cacheKey);
  if (cachedProduct) {
    return res.json({
      success: true,
      product: cachedProduct,
      cached: true
    });
  }

  // Fetch product
  const product = await productService.getProductBySku(sku, storeIds);

  if (!product) {
    return res.status(404).json({
      success: false,
      error: `Product with SKU '${sku}' not found`
    });
  }

  // Cache the product
  requestCache.set(cacheKey, product);

  res.json({
    success: true,
    product: product,
    cached: false
  });
}));

// Cache management endpoint
app.get('/cache/stats', (req, res) => {
  res.json(requestCache.getStats());
});

app.post('/cache/clear', (req, res) => {
  requestCache.clear();
  res.json({
    success: true,
    message: 'Cache cleared successfully'
  });
});

// 404 handler - must be after all routes
app.use(notFoundHandler);

// Error handling middleware - must be last
app.use(errorHandler);

// Start server
const server = app.listen(port, () => {
  console.log(`NodeJento Magento microservice listening at http://localhost:${port}`);
  console.log(`Environment: ${config.server.env}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
    sequelize.close();
  });
});

module.exports = app;
