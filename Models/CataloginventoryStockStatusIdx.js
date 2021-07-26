const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CataloginventoryStockStatusIdx', {
    product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Product ID"
    },
    website_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Website ID"
    },
    stock_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Stock ID"
    },
    qty: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Qty"
    },
    stock_status: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      comment: "Stock Status"
    }
  }, {
    sequelize,
    tableName: 'cataloginventory_stock_status_idx',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_id" },
          { name: "website_id" },
          { name: "stock_id" },
        ]
      },
      {
        name: "CATALOGINVENTORY_STOCK_STATUS_IDX_STOCK_ID",
        using: "BTREE",
        fields: [
          { name: "stock_id" },
        ]
      },
      {
        name: "CATALOGINVENTORY_STOCK_STATUS_IDX_WEBSITE_ID",
        using: "BTREE",
        fields: [
          { name: "website_id" },
        ]
      },
    ]
  });
};
