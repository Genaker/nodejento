const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CataloginventoryStockStatus', {
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
    tableName: 'cataloginventory_stock_status',
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
        name: "CATALOGINVENTORY_STOCK_STATUS_STOCK_ID",
        using: "BTREE",
        fields: [
          { name: "stock_id" },
        ]
      },
      {
        name: "CATALOGINVENTORY_STOCK_STATUS_WEBSITE_ID",
        using: "BTREE",
        fields: [
          { name: "website_id" },
        ]
      },
      {
        name: "CATALOGINVENTORY_STOCK_STATUS_STOCK_STATUS",
        using: "BTREE",
        fields: [
          { name: "stock_status" },
        ]
      },
    ]
  });
};
