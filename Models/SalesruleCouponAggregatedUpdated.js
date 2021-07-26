const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesruleCouponAggregatedUpdated', {
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
    subtotal_amount_actual: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Subtotal Amount Actual"
    },
    discount_amount_actual: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Discount Amount Actual"
    },
    total_amount_actual: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Total Amount Actual"
    },
    rule_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Rule Name"
    }
  }, {
    sequelize,
    tableName: 'salesrule_coupon_aggregated_updated',
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
        name: "UNQ_7196FA120A4F0F84E1B66605E87E213E",
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
        name: "SALESRULE_COUPON_AGGREGATED_UPDATED_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
      {
        name: "SALESRULE_COUPON_AGGREGATED_UPDATED_RULE_NAME",
        using: "BTREE",
        fields: [
          { name: "rule_name" },
        ]
      },
    ]
  });
};
