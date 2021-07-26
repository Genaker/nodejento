const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TaxCalculationRateTitle', {
    tax_calculation_rate_title_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Tax Calculation Rate Title ID"
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
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
      }
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Value"
    }
  }, {
    sequelize,
    tableName: 'tax_calculation_rate_title',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tax_calculation_rate_title_id" },
        ]
      },
      {
        name: "TAX_CALCULATION_RATE_TITLE_TAX_CALCULATION_RATE_ID_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "tax_calculation_rate_id" },
          { name: "store_id" },
        ]
      },
      {
        name: "TAX_CALCULATION_RATE_TITLE_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
