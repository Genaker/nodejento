const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesOrderTaxItem', {
    tax_item_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Tax Item ID"
    },
    tax_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Tax ID",
      references: {
        model: 'sales_order_tax',
        key: 'tax_id'
      }
    },
    item_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Item ID",
      references: {
        model: 'sales_order_item',
        key: 'item_id'
      }
    },
    tax_percent: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: false,
      comment: "Real Tax Percent For Item"
    },
    amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      comment: "Tax amount for the item and tax rate"
    },
    base_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      comment: "Base tax amount for the item and tax rate"
    },
    real_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      comment: "Real tax amount for the item and tax rate"
    },
    real_base_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      comment: "Real base tax amount for the item and tax rate"
    },
    associated_item_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Id of the associated item",
      references: {
        model: 'sales_order_item',
        key: 'item_id'
      }
    },
    taxable_item_type: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "Type of the taxable item"
    }
  }, {
    sequelize,
    tableName: 'sales_order_tax_item',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tax_item_id" },
        ]
      },
      {
        name: "SALES_ORDER_TAX_ITEM_TAX_ID_ITEM_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tax_id" },
          { name: "item_id" },
        ]
      },
      {
        name: "SALES_ORDER_TAX_ITEM_ASSOCIATED_ITEM_ID_SALES_ORDER_ITEM_ITEM_ID",
        using: "BTREE",
        fields: [
          { name: "associated_item_id" },
        ]
      },
      {
        name: "SALES_ORDER_TAX_ITEM_ITEM_ID",
        using: "BTREE",
        fields: [
          { name: "item_id" },
        ]
      },
    ]
  });
};
