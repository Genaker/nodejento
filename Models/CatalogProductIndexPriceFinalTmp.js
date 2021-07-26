const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductIndexPriceFinalTmp', {
    entity_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    customer_group_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "Customer Group ID"
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
    orig_price: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      comment: "Original Price"
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
    tableName: 'catalog_product_index_price_final_tmp',
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
