const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogruleProduct', {
    rule_product_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Rule Product ID"
    },
    rule_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Rule ID"
    },
    from_time: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "From Time"
    },
    to_time: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "To time"
    },
    customer_group_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Product ID"
    },
    action_operator: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "to_fixed",
      comment: "Action Operator"
    },
    action_amount: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false,
      defaultValue: 0.000000,
      comment: "Action Amount"
    },
    action_stop: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Action Stop"
    },
    sort_order: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Sort Order"
    },
    website_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      comment: "Website ID"
    }
  }, {
    sequelize,
    tableName: 'catalogrule_product',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rule_product_id" },
        ]
      },
      {
        name: "UNQ_EAA51B56FF092A0DCB795D1CEF812B7B",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rule_id" },
          { name: "from_time" },
          { name: "to_time" },
          { name: "website_id" },
          { name: "customer_group_id" },
          { name: "product_id" },
          { name: "sort_order" },
        ]
      },
      {
        name: "CATALOGRULE_PRODUCT_CUSTOMER_GROUP_ID",
        using: "BTREE",
        fields: [
          { name: "customer_group_id" },
        ]
      },
      {
        name: "CATALOGRULE_PRODUCT_WEBSITE_ID",
        using: "BTREE",
        fields: [
          { name: "website_id" },
        ]
      },
      {
        name: "CATALOGRULE_PRODUCT_FROM_TIME",
        using: "BTREE",
        fields: [
          { name: "from_time" },
        ]
      },
      {
        name: "CATALOGRULE_PRODUCT_TO_TIME",
        using: "BTREE",
        fields: [
          { name: "to_time" },
        ]
      },
      {
        name: "CATALOGRULE_PRODUCT_PRODUCT_ID",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
};
