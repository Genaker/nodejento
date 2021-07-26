const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TaxCalculationRule', {
    tax_calculation_rule_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Tax Calculation Rule ID"
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Code"
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Priority"
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Position"
    },
    calculate_subtotal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Calculate off subtotal option"
    }
  }, {
    sequelize,
    tableName: 'tax_calculation_rule',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tax_calculation_rule_id" },
        ]
      },
      {
        name: "TAX_CALCULATION_RULE_PRIORITY_POSITION",
        using: "BTREE",
        fields: [
          { name: "priority" },
          { name: "position" },
        ]
      },
      {
        name: "TAX_CALCULATION_RULE_CODE",
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
};
