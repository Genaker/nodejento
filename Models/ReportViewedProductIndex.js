const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReportViewedProductIndex', {
    index_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Index ID"
    },
    visitor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
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
    added_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Added At"
    }
  }, {
    sequelize,
    tableName: 'report_viewed_product_index',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "index_id" },
        ]
      },
      {
        name: "REPORT_VIEWED_PRODUCT_INDEX_VISITOR_ID_PRODUCT_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "visitor_id" },
          { name: "product_id" },
        ]
      },
      {
        name: "REPORT_VIEWED_PRODUCT_INDEX_CUSTOMER_ID_PRODUCT_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "customer_id" },
          { name: "product_id" },
        ]
      },
      {
        name: "REPORT_VIEWED_PRODUCT_INDEX_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
      {
        name: "REPORT_VIEWED_PRODUCT_INDEX_ADDED_AT",
        using: "BTREE",
        fields: [
          { name: "added_at" },
        ]
      },
      {
        name: "REPORT_VIEWED_PRODUCT_INDEX_PRODUCT_ID",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
};
