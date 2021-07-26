const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TaxCalculation', {
    tax_calculation_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Tax Calculation ID"
    },
    tax_calculation_rate_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Tax Calculation Rate ID",
      references: {
        model: 'tax_calculation_rate',
        key: 'tax_calculation_rate_id'
      }
    },
    tax_calculation_rule_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Tax Calculation Rule ID",
      references: {
        model: 'tax_calculation_rule',
        key: 'tax_calculation_rule_id'
      }
    },
    customer_tax_class_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "Customer Tax Class ID",
      references: {
        model: 'tax_class',
        key: 'class_id'
      }
    },
    product_tax_class_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "Product Tax Class ID",
      references: {
        model: 'tax_class',
        key: 'class_id'
      }
    }
  }, {
    sequelize,
    tableName: 'tax_calculation',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tax_calculation_id" },
        ]
      },
      {
        name: "TAX_CALCULATION_TAX_CALCULATION_RULE_ID",
        using: "BTREE",
        fields: [
          { name: "tax_calculation_rule_id" },
        ]
      },
      {
        name: "TAX_CALCULATION_CUSTOMER_TAX_CLASS_ID",
        using: "BTREE",
        fields: [
          { name: "customer_tax_class_id" },
        ]
      },
      {
        name: "TAX_CALCULATION_PRODUCT_TAX_CLASS_ID",
        using: "BTREE",
        fields: [
          { name: "product_tax_class_id" },
        ]
      },
      {
        name: "TAX_CALC_TAX_CALC_RATE_ID_CSTR_TAX_CLASS_ID_PRD_TAX_CLASS_ID",
        using: "BTREE",
        fields: [
          { name: "tax_calculation_rate_id" },
          { name: "customer_tax_class_id" },
          { name: "product_tax_class_id" },
        ]
      },
    ]
  });
};
