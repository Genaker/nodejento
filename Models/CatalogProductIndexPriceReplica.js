const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductIndexPriceReplica', {
    entity_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    customer_group_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
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
    price: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      comment: "Price"
    },
    final_price: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      comment: "Final Price"
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
    }
  }, {
    sequelize,
    tableName: 'catalog_product_index_price_replica',
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
      {
        name: "CATALOG_PRODUCT_INDEX_PRICE_CUSTOMER_GROUP_ID",
        using: "BTREE",
        fields: [
          { name: "customer_group_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_INDEX_PRICE_MIN_PRICE",
        using: "BTREE",
        fields: [
          { name: "min_price" },
        ]
      },
      {
        name: "CAT_PRD_IDX_PRICE_WS_ID_CSTR_GROUP_ID_MIN_PRICE",
        using: "BTREE",
        fields: [
          { name: "website_id" },
          { name: "customer_group_id" },
          { name: "min_price" },
        ]
      },
    ]
  });
};
