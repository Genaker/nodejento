const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesruleCouponAggregatedOrder', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "ID"
    },
    period: {
      type: DataTypes.DATEONLY,
      allowNull: false,
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
    coupon_code: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Coupon Code"
    },
    coupon_uses: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Coupon Uses"
    },
    subtotal_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Subtotal Amount"
    },
    discount_amount: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Discount Amount"
    },
    total_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Total Amount"
    },
    rule_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Rule Name"
    }
  }, {
    sequelize,
    tableName: 'salesrule_coupon_aggregated_order',
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
        name: "UNQ_1094D1FBBCBB11704A29DEF3ACC37D2B",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "period" },
          { name: "store_id" },
          { name: "order_status" },
          { name: "coupon_code" },
        ]
      },
      {
        name: "SALESRULE_COUPON_AGGREGATED_ORDER_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
      {
        name: "SALESRULE_COUPON_AGGREGATED_ORDER_RULE_NAME",
        using: "BTREE",
        fields: [
          { name: "rule_name" },
        ]
      },
    ]
  });
};
