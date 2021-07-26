const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogruleProductPrice', {
    rule_product_price_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Rule Product PriceId"
    },
    rule_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "Rule Date"
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
    rule_price: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false,
      defaultValue: 0.000000,
      comment: "Rule Price"
    },
    website_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      comment: "Website ID"
    },
    latest_start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Latest StartDate"
    },
    earliest_end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Earliest EndDate"
    }
  }, {
    sequelize,
    tableName: 'catalogrule_product_price',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rule_product_price_id" },
        ]
      },
      {
        name: "CATRULE_PRD_PRICE_RULE_DATE_WS_ID_CSTR_GROUP_ID_PRD_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rule_date" },
          { name: "website_id" },
          { name: "customer_group_id" },
          { name: "product_id" },
        ]
      },
      {
        name: "CATALOGRULE_PRODUCT_PRICE_CUSTOMER_GROUP_ID",
        using: "BTREE",
        fields: [
          { name: "customer_group_id" },
        ]
      },
      {
        name: "CATALOGRULE_PRODUCT_PRICE_WEBSITE_ID",
        using: "BTREE",
        fields: [
          { name: "website_id" },
        ]
      },
      {
        name: "CATALOGRULE_PRODUCT_PRICE_PRODUCT_ID",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
};
