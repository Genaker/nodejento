const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductIndexPriceBundleOptIdx', {
    entity_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    customer_group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    website_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Website ID"
    },
    option_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "Option ID"
    },
    min_price: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      comment: "Min Price"
    },
    alt_price: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      comment: "Alt Price"
    },
    max_price: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      comment: "Max Price"
    },
    tier_price: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      comment: "Tier Price"
    },
    alt_tier_price: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      comment: "Alt Tier Price"
    }
  }, {
    sequelize,
    tableName: 'catalog_product_index_price_bundle_opt_idx',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "entity_id" },
          { name: "customer_group_id" },
          { name: "website_id" },
          { name: "option_id" },
        ]
      },
    ]
  });
};
