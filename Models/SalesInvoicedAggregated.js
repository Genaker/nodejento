const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesInvoicedAggregated', {
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
      allowNull: true,
      comment: "Order Status"
    },
    orders_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Orders Count"
    },
    orders_invoiced: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Orders Invoiced"
    },
    invoiced: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Invoiced"
    },
    invoiced_captured: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Invoiced Captured"
    },
    invoiced_not_captured: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Invoiced Not Captured"
    }
  }, {
    sequelize,
    tableName: 'sales_invoiced_aggregated',
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
        name: "SALES_INVOICED_AGGREGATED_PERIOD_STORE_ID_ORDER_STATUS",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "period" },
          { name: "store_id" },
          { name: "order_status" },
        ]
      },
      {
        name: "SALES_INVOICED_AGGREGATED_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
