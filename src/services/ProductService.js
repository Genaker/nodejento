/**
 * Product Service
 * Handles business logic for product operations
 */

class ProductService {
  constructor(models, eavService, productTransformer) {
    this.models = models;
    this.eavService = eavService;
    this.productTransformer = productTransformer;
  }

  /**
   * Get products by SKUs with full EAV data
   * @param {Array<string>} skus - Array of product SKUs
   * @param {Array<number>} storeIds - Store IDs to fetch data for (default: [0, 1])
   * @returns {Promise<Array>} Array of products with transformed data
   */
  async getProductsBySku(skus, storeIds = [0, 1]) {
    const visibleAttributes = this.eavService.getVisibleAttributeIds();

    const products = await this.models.CatalogProductEntity.findAll({
      where: { sku: skus },
      include: this._getProductIncludes(visibleAttributes, storeIds)
    });

    // Transform products using the ProductTransformer service
    return this.productTransformer.transform(products);
  }

  /**
   * Get a single product by SKU
   * @param {string} sku - Product SKU
   * @param {Array<number>} storeIds - Store IDs to fetch data for
   * @returns {Promise<Object|null>} Product with transformed data or null
   */
  async getProductBySku(sku, storeIds = [0, 1]) {
    const products = await this.getProductsBySku([sku], storeIds);
    return products.length > 0 ? products[0] : null;
  }

  /**
   * Get product includes for Sequelize query
   * @private
   * @param {Array<number>} visibleAttributes - Visible attribute IDs
   * @param {Array<number>} storeIds - Store IDs
   * @returns {Array} Array of Sequelize include configurations
   */
  _getProductIncludes(visibleAttributes, storeIds) {
    return [
      {
        model: this.models.CatalogProductEntityVarchar,
        as: 'CatalogProductEntityVarchars',
        where: {
          attribute_id: visibleAttributes,
          store_id: storeIds
        },
        required: false,
        attributes: ['store_id', 'value', 'attribute_id'],
        separate: true
      },
      {
        model: this.models.CatalogProductEntityInt,
        as: 'CatalogProductEntityInts',
        where: {
          attribute_id: visibleAttributes,
          store_id: storeIds
        },
        required: false,
        attributes: ['store_id', 'value', 'attribute_id'],
        separate: true
      },
      {
        model: this.models.CatalogProductEntityText,
        as: 'CatalogProductEntityTexts',
        where: {
          attribute_id: visibleAttributes,
          store_id: storeIds
        },
        required: false,
        attributes: ['store_id', 'value', 'attribute_id'],
        separate: true
      },
      {
        model: this.models.CatalogProductEntityDecimal,
        as: 'CatalogProductEntityDecimals',
        where: {
          attribute_id: visibleAttributes,
          store_id: storeIds
        },
        required: false,
        attributes: ['store_id', 'value', 'attribute_id'],
        separate: true
      },
      {
        model: this.models.CatalogProductEntityDatetime,
        as: 'CatalogProductEntityDatetimes',
        where: {
          attribute_id: visibleAttributes,
          store_id: storeIds
        },
        required: false,
        attributes: ['store_id', 'value', 'attribute_id'],
        separate: true
      },
      {
        model: this.models.CatalogProductEntityMediaGallery,
        required: false,
        raw: true,
        attributes: ['value', 'media_type']
      },
      {
        model: this.models.CataloginventoryStockItem,
        as: 'CataloginventoryStockItems',
        required: false,
        separate: true
      },
      {
        model: this.models.CatalogProductEntityTierPrice,
        as: 'CatalogProductEntityTierPrices',
        required: false,
        separate: true
      }
    ];
  }
}

module.exports = ProductService;
