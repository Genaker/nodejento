/**
 * EAV Configuration Service
 * Manages the loading and caching of Magento EAV attributes
 */

const { QueryTypes } = require('sequelize');

class EavService {
  constructor(sequelize, models) {
    this.sequelize = sequelize;
    this.models = models;
    this.config = {
      attributes: null,
      labels: null,
      catalog: null,
      visibleOnFront: null,
      optionValues: null,
      initialized: false
    };
  }

  /**
   * Initialize EAV configuration by loading all necessary data
   * @returns {Promise<Object>} EAV configuration object
   */
  async initialize() {
    if (this.config.initialized) {
      return this.config;
    }

    try {
      // Load all EAV data in parallel
      const [attributes, labels, catalog, visible, optionValues] = await Promise.all([
        this._loadAttributes(),
        this._loadLabels(),
        this._loadCatalog(),
        this._loadVisibleAttributes(),
        this._loadOptionValues()
      ]);

      // Process attributes into a map for quick lookup
      this.config.attributes = this._processAttributes(attributes);
      this.config.labels = labels;
      this.config.catalog = catalog;
      this.config.visibleOnFront = visible.map(v => v.attribute_id);
      this.config.optionValues = this._processOptionValues(optionValues);
      this.config.initialized = true;

      console.log(`EAV Service initialized with ${attributes.length} attributes`);

      return this.config;
    } catch (error) {
      console.error('Failed to initialize EAV service:', error);
      throw new Error('EAV initialization failed: ' + error.message);
    }
  }

  /**
   * Get visible attribute IDs for filtering
   * @returns {Array<number>} Array of attribute IDs
   */
  getVisibleAttributeIds() {
    if (!this.config.initialized) {
      throw new Error('EAV service not initialized. Call initialize() first.');
    }
    return this.config.visibleOnFront || [];
  }

  /**
   * Get EAV configuration
   * @returns {Object} EAV configuration object
   */
  getConfig() {
    if (!this.config.initialized) {
      throw new Error('EAV service not initialized. Call initialize() first.');
    }
    return this.config;
  }

  /**
   * Load all EAV attributes
   * @private
   */
  async _loadAttributes() {
    return await this.models.EavAttribute.findAll({
      raw: true,
      plain: false
    });
  }

  /**
   * Load EAV attribute labels
   * @private
   */
  async _loadLabels() {
    return await this.models.EavAttributeLabel.findAll({
      raw: true
    });
  }

  /**
   * Load catalog EAV attributes
   * @private
   */
  async _loadCatalog() {
    return await this.sequelize.query(
      'SELECT * FROM catalog_eav_attribute',
      { type: QueryTypes.SELECT }
    );
  }

  /**
   * Load visible attributes (visible on front)
   * @private
   */
  async _loadVisibleAttributes() {
    const sql = `
      SELECT attribute_id 
      FROM catalog_eav_attribute 
      WHERE is_visible_on_front = 1 
         OR is_html_allowed_on_front = 1 
         OR is_visible = 1
    `;
    return await this.sequelize.query(sql, { type: QueryTypes.SELECT });
  }

  /**
   * Load attribute option values
   * @private
   */
  async _loadOptionValues() {
    const sql = 'SELECT * FROM eav_attribute_option_value';
    return await this.sequelize.query(sql, { type: QueryTypes.SELECT });
  }

  /**
   * Process attributes into indexed map for quick lookup
   * @private
   */
  _processAttributes(attributes) {
    const processed = {};
    attributes.forEach((attr) => {
      const key = `attr_${attr.attribute_id}`;
      processed[key] = {
        code: attr.attribute_code,
        data: attr
      };
    });
    return processed;
  }

  /**
   * Process option values into indexed map
   * @private
   */
  _processOptionValues(values) {
    const processed = {};
    values.forEach((val) => {
      if (!processed[val.value_id]) {
        processed[val.value_id] = {};
      }
      processed[val.value_id][val.store_id] = val;
    });
    return processed;
  }

  /**
   * Refresh EAV configuration (clear cache and reload)
   * @returns {Promise<Object>} Refreshed EAV configuration
   */
  async refresh() {
    this.config.initialized = false;
    return await this.initialize();
  }
}

module.exports = EavService;
