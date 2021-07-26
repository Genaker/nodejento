const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductEntityTierPrice', {
    value_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Value ID"
    },
    entity_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Entity ID",
      references: {
        model: 'catalog_product_entity',
        key: 'entity_id'
      }
    },
    all_groups: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "Is Applicable To All Customer Groups"
    },
    customer_group_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Customer Group ID",
      references: {
        model: 'customer_group',
        key: 'customer_group_id'
      }
    },
    qty: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: false,
      defaultValue: 1.0000,
      comment: "QTY"
    },
    value: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false,
      defaultValue: 0.000000,
      comment: "Value"
    },
    website_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      comment: "Website ID",
      references: {
        model: 'store_website',
        key: 'website_id'
      }
    },
    percentage_value: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true,
      comment: "Percentage value"
    }
  }, {
    sequelize,
    tableName: 'catalog_product_entity_tier_price',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "value_id" },
        ]
      },
      {
        name: "UNQ_E8AB433B9ACB00343ABB312AD2FAB087",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "entity_id" },
          { name: "all_groups" },
          { name: "customer_group_id" },
          { name: "qty" },
          { name: "website_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_ENTITY_TIER_PRICE_CUSTOMER_GROUP_ID",
        using: "BTREE",
        fields: [
          { name: "customer_group_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_ENTITY_TIER_PRICE_WEBSITE_ID",
        using: "BTREE",
        fields: [
          { name: "website_id" },
        ]
      },
    ]
  });
};
