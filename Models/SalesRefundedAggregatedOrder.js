const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesRefundedAggregatedOrder', {
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
    refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Refunded"
    },
    online_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Online Refunded"
    },
    offline_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Offline Refunded"
    }
  }, {
    sequelize,
    tableName: 'sales_refunded_aggregated_order',
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
        name: "SALES_REFUNDED_AGGREGATED_ORDER_PERIOD_STORE_ID_ORDER_STATUS",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "period" },
          { name: "store_id" },
          { name: "order_status" },
        ]
      },
      {
        name: "SALES_REFUNDED_AGGREGATED_ORDER_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
