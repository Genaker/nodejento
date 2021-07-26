const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductIndexPriceBundleIdx', {
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
    tax_class_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "Tax Class ID"
    },
    price_type: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      comment: "Price Type"
    },
    special_price: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      comment: "Special Price"
    },
    tier_percent: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      comment: "Tier Percent"
    },
    orig_price: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      comment: "Orig Price"
    },
    price: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      comment: "Price"
    },
    min_price: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      comment: "Min Price"
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
    base_tier: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      comment: "Base Tier"
    }
  }, {
    sequelize,
    tableName: 'catalog_product_index_price_bundle_idx',
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
        ]
      },
    ]
  });
};
