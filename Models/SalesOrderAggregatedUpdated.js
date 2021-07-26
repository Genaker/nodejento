const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesOrderAggregatedUpdated', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "ID"
    },
    period: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Period"
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
    order_status: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Order Status"
    },
    orders_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Orders Count"
    },
    total_qty_ordered: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Total Qty Ordered"
    },
    total_qty_invoiced: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Total Qty Invoiced"
    },
    total_income_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Total Income Amount"
    },
    total_revenue_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Total Revenue Amount"
    },
    total_profit_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Total Profit Amount"
    },
    total_invoiced_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Total Invoiced Amount"
    },
    total_canceled_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Total Canceled Amount"
    },
    total_paid_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Total Paid Amount"
    },
    total_refunded_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Total Refunded Amount"
    },
    total_tax_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Total Tax Amount"
    },
    total_tax_amount_actual: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Total Tax Amount Actual"
    },
    total_shipping_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Total Shipping Amount"
    },
    total_shipping_amount_actual: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Total Shipping Amount Actual"
    },
    total_discount_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Total Discount Amount"
    },
    total_discount_amount_actual: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Total Discount Amount Actual"
    }
  }, {
    sequelize,
    tableName: 'sales_order_aggregated_updated',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "SALES_ORDER_AGGREGATED_UPDATED_PERIOD_STORE_ID_ORDER_STATUS",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "period" },
          { name: "store_id" },
          { name: "order_status" },
        ]
      },
      {
        name: "SALES_ORDER_AGGREGATED_UPDATED_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
