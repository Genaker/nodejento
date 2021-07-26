const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesShippingAggregatedOrder', {
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
    shipping_description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Shipping Description"
    },
    orders_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Orders Count"
    },
    total_shipping: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Total Shipping"
    },
    total_shipping_actual: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Total Shipping Actual"
    }
  }, {
    sequelize,
    tableName: 'sales_shipping_aggregated_order',
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
        name: "UNQ_C05FAE47282EEA68654D0924E946761F",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "period" },
          { name: "store_id" },
          { name: "order_status" },
          { name: "shipping_description" },
        ]
      },
      {
        name: "SALES_SHIPPING_AGGREGATED_ORDER_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
