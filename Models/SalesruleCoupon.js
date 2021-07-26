const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesruleCoupon', {
    coupon_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Coupon ID"
    },
    rule_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Rule ID",
      references: {
        model: 'salesrule',
        key: 'rule_id'
      }
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Code",
      unique: "SALESRULE_COUPON_CODE"
    },
    usage_limit: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Usage Limit"
    },
    usage_per_customer: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Usage Per Customer"
    },
    times_used: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Times Used"
    },
    expiration_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Expiration Date"
    },
    is_primary: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Is Primary"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Coupon Code Creation Date"
    },
    type: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      comment: "Coupon Code Type"
    }
  }, {
    sequelize,
    tableName: 'salesrule_coupon',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "coupon_id" },
        ]
      },
      {
        name: "SALESRULE_COUPON_CODE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "SALESRULE_COUPON_RULE_ID_IS_PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rule_id" },
          { name: "is_primary" },
        ]
      },
      {
        name: "SALESRULE_COUPON_RULE_ID",
        using: "BTREE",
        fields: [
          { name: "rule_id" },
        ]
      },
    ]
  });
};
