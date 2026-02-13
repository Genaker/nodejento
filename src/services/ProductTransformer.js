/**
 * Product Transformation Service
 * Handles the transformation of Magento EAV product data
 */

class ProductTransformer {
  constructor(eavConfig) {
    this.eavConfig = eavConfig;
  }

  /**
   * Transform a single product or collection of products
   * @param {Object|Array} products - Product or array of products
   * @returns {Object|Array} Transformed product(s)
   */
  transform(products) {
    const isCollection = Array.isArray(products);
    const productArray = isCollection ? products : [products];

    const aliases = [
      'CatalogProductEntityVarchars',
      'CatalogProductEntityInts',
      'CatalogProductEntityTexts',
      'CatalogProductEntityDecimals',
      'CatalogProductEntityDatetimes'
    ];

    const coreAttributes = [
      'entity_id',
      'sku',
      'attribute_set_id',
      'type_id',
      'created_at',
      'updated_at',
      'has_options'
    ];

    aliases.forEach((ormAttr) => {
      productArray.forEach((product, index) => {
        this._initializeAttributes(productArray[index], coreAttributes);
        this._transformEavAttributes(productArray[index], ormAttr);
        this._transformGallery(productArray[index]);
        this._transformStock(productArray[index]);
        this._transformTierPrice(productArray[index]);
      });
    });

    return isCollection ? productArray : productArray[0];
  }

  /**
   * Initialize product attributes object
   * @private
   */
  _initializeAttributes(product, coreAttributes) {
    if (!product.dataValues) return;

    if (!product.dataValues.attributes) {
      product.dataValues.attributes = {};
    }

    coreAttributes.forEach(attr => {
      if (product.dataValues[attr] !== undefined) {
        product.dataValues.attributes[attr] = product.dataValues[attr];
      }
    });
  }

  /**
   * Transform EAV attributes for a product
   * @private
   */
  _transformEavAttributes(product, ormAttr) {
    if (!product[ormAttr] || !this.eavConfig.attributes) return;

    product[ormAttr].forEach((attr) => {
      const attributeId = attr.dataValues.attribute_id;
      const eavKey = `attr_${attributeId}`;
      
      if (!this.eavConfig.attributes[eavKey]) return;

      const attributeCode = this.eavConfig.attributes[eavKey].code;
      const storeId = attr.dataValues.store_id;

      // Only set attribute if it doesn't exist or store_id is greater than 0
      if (!product.dataValues.attributes[attributeCode] || storeId > 0) {
        product.dataValues.attributes[attributeCode] = {
          value: attr.dataValues.value
        };

        const eavData = this.eavConfig.attributes[eavKey].data;
        const frontendInput = eavData.frontend_input;
        const sourceModel = eavData.source_model;

        product.dataValues.attributes[attributeCode].frontend_input = frontendInput;

        // Handle select and multiselect attributes
        if (['select', 'multiselect'].includes(frontendInput) && !sourceModel) {
          const optionValue = this._getOptionValue(
            attr.dataValues.value,
            storeId
          );
          product.dataValues.attributes[attributeCode].optionValues = optionValue;
        }
      }
    });

    // Clean up - remove EAV associations from product object
    delete product[ormAttr];
    delete product.dataValues[ormAttr];
  }

  /**
   * Get option value(s) for select/multiselect attributes
   * @private
   */
  _getOptionValue(attributeValue, storeId) {
    if (!this.eavConfig.optionValues) return null;

    const values = String(attributeValue).split(',');
    const result = [];

    if (values.length > 1) {
      values.forEach((val) => {
        const optionData = this.eavConfig.optionValues[val];
        if (optionData && optionData[storeId]) {
          result.push(optionData[storeId]);
        }
      });
      return result;
    } else {
      const optionData = this.eavConfig.optionValues[attributeValue];
      return optionData && optionData[storeId] ? optionData[storeId] : null;
    }
  }

  /**
   * Transform product gallery data
   * @private
   */
  _transformGallery(product) {
    if (!product.CatalogProductEntityMediaGalleries) return;

    product.dataValues.gallery = [];
    product.CatalogProductEntityMediaGalleries.forEach((gal) => {
      if (gal.dataValues.CatalogProductEntityMediaGalleryValueToEntity) {
        delete gal.dataValues.CatalogProductEntityMediaGalleryValueToEntity;
      }
      product.dataValues.gallery.push(gal.dataValues);
    });

    delete product.CatalogProductEntityMediaGalleries;
    delete product.dataValues.CatalogProductEntityMediaGalleries;
  }

  /**
   * Transform stock data
   * @private
   */
  _transformStock(product) {
    if (!product.CataloginventoryStockItems) return;

    product.dataValues.stock = {};
    if (product.CataloginventoryStockItems[0]) {
      product.dataValues.stock = product.CataloginventoryStockItems[0].dataValues;
    }

    delete product.CataloginventoryStockItems;
    delete product.dataValues.CataloginventoryStockItems;
  }

  /**
   * Transform tier price data
   * @private
   */
  _transformTierPrice(product) {
    if (!product.CatalogProductEntityTierPrices) return;

    product.dataValues.tier_price = [];
    product.CatalogProductEntityTierPrices.forEach((tier) => {
      product.dataValues.tier_price.push(tier.dataValues);
    });

    delete product.CatalogProductEntityTierPrices;
    delete product.dataValues.CatalogProductEntityTierPrices;
  }
}

module.exports = ProductTransformer;
