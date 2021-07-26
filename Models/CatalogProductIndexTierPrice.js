const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductIndexTierPrice', {
    entity_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID",
      references: {
        model: 'catalog_product_entity',
        key: 'entity_id'
      }
    },
    customer_group_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Customer Group ID",
      references: {
        model: 'customer_group',
        key: 'customer_group_id'
      }
    },
    website_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Website ID",
      references: {
        model: 'store_website',
        key: 'website_id'
      }
    },
    min_price: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      comment: "Min Price"
    }
  }, {
    sequelize,
    tableName: 'catalog_product_index_tier_price',
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
        name: "CATALOG_PRODUCT_INDEX_TIER_PRICE_CUSTOMER_GROUP_ID",
        using: "BTREE",
        fields: [
          { name: "customer_group_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_INDEX_TIER_PRICE_WEBSITE_ID",
        using: "BTREE",
        fields: [
          { name: "website_id" },
        ]
      },
    ]
  });
};
