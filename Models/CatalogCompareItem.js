const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogCompareItem', {
    catalog_compare_item_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Compare Item ID"
    },
    visitor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Visitor ID"
    },
    customer_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Customer ID",
      references: {
        model: 'customer_entity',
        key: 'entity_id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Product ID",
      references: {
        model: 'catalog_product_entity',
        key: 'entity_id'
      }
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
      }
    },
    list_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "List ID",
      references: {
        model: 'catalog_compare_list',
        key: 'list_id'
      }
    }
  }, {
    sequelize,
    tableName: 'catalog_compare_item',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "catalog_compare_item_id" },
        ]
      },
      {
        name: "CATALOG_COMPARE_ITEM_LIST_ID_CATALOG_COMPARE_LIST_LIST_ID",
        using: "BTREE",
        fields: [
          { name: "list_id" },
        ]
      },
      {
        name: "CATALOG_COMPARE_ITEM_PRODUCT_ID",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "CATALOG_COMPARE_ITEM_VISITOR_ID_PRODUCT_ID",
        using: "BTREE",
        fields: [
          { name: "visitor_id" },
          { name: "product_id" },
        ]
      },
      {
        name: "CATALOG_COMPARE_ITEM_CUSTOMER_ID_PRODUCT_ID",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
          { name: "product_id" },
        ]
      },
      {
        name: "CATALOG_COMPARE_ITEM_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
