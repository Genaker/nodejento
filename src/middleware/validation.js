/**
 * Input validation middleware
 * Provides common validation functions for request parameters
 */

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = 400;
  }
}

/**
 * Validate SKU parameter
 * @param {string} sku - Product SKU to validate
 * @throws {ValidationError} If SKU is invalid
 */
const validateSku = (sku) => {
  if (!sku || typeof sku !== 'string') {
    throw new ValidationError('SKU is required and must be a string');
  }

  if (sku.trim().length === 0) {
    throw new ValidationError('SKU cannot be empty');
  }

  if (sku.length > 64) {
    throw new ValidationError('SKU is too long (max 64 characters)');
  }

  // Basic SKU format validation (alphanumeric, dashes, underscores)
  if (!/^[a-zA-Z0-9_-]+$/.test(sku)) {
    throw new ValidationError('SKU contains invalid characters (only alphanumeric, dashes, and underscores allowed)');
  }

  return sku.trim();
};

/**
 * Validate and parse store IDs
 * @param {string|Array} storeIds - Store IDs as string or array
 * @returns {Array<number>} Validated array of store IDs
 * @throws {ValidationError} If store IDs are invalid
 */
const validateStoreIds = (storeIds) => {
  if (!storeIds) {
    return [0, 1]; // Default store IDs
  }

  let ids;
  if (typeof storeIds === 'string') {
    ids = storeIds.split(',').map(id => parseInt(id.trim(), 10));
  } else if (Array.isArray(storeIds)) {
    ids = storeIds.map(id => parseInt(id, 10));
  } else {
    throw new ValidationError('Store IDs must be a comma-separated string or array');
  }

  // Validate all IDs are valid numbers
  if (ids.some(id => isNaN(id) || id < 0)) {
    throw new ValidationError('All store IDs must be non-negative integers');
  }

  // Remove duplicates
  ids = [...new Set(ids)];

  if (ids.length === 0) {
    throw new ValidationError('At least one store ID is required');
  }

  if (ids.length > 10) {
    throw new ValidationError('Too many store IDs (max 10)');
  }

  return ids;
};

/**
 * Validate and parse SKU list
 * @param {string|Array} skus - SKUs as string or array
 * @returns {Array<string>} Validated array of SKUs
 * @throws {ValidationError} If SKUs are invalid
 */
const validateSkuList = (skus) => {
  if (!skus) {
    throw new ValidationError('At least one SKU is required');
  }

  let skuArray;
  if (typeof skus === 'string') {
    skuArray = skus.split(',').map(sku => sku.trim());
  } else if (Array.isArray(skus)) {
    skuArray = skus.map(sku => String(sku).trim());
  } else {
    throw new ValidationError('SKUs must be a comma-separated string or array');
  }

  // Filter empty values
  skuArray = skuArray.filter(sku => sku.length > 0);

  if (skuArray.length === 0) {
    throw new ValidationError('At least one valid SKU is required');
  }

  if (skuArray.length > 50) {
    throw new ValidationError('Too many SKUs requested (max 50)');
  }

  // Validate each SKU
  skuArray.forEach(sku => validateSku(sku));

  return skuArray;
};

/**
 * Validation middleware factory
 * Creates Express middleware for validating request parameters
 */
const validate = {
  /**
   * Validate product SKU in params
   */
  productSku: (req, res, next) => {
    try {
      req.params.sku = validateSku(req.params.sku);
      next();
    } catch (error) {
      next(error);
    }
  },

  /**
   * Validate store IDs in query
   */
  storeIds: (req, res, next) => {
    try {
      req.validatedStoreIds = validateStoreIds(req.query.store_ids);
      next();
    } catch (error) {
      next(error);
    }
  },

  /**
   * Validate SKU list in query
   */
  skuList: (req, res, next) => {
    try {
      req.validatedSkus = validateSkuList(req.query.skus);
      next();
    } catch (error) {
      next(error);
    }
  }
};

module.exports = {
  ValidationError,
  validateSku,
  validateStoreIds,
  validateSkuList,
  validate
};
