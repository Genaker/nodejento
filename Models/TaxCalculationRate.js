const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TaxCalculationRate', {
    tax_calculation_rate_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Tax Calculation Rate ID"
    },
    tax_country_id: {
      type: DataTypes.STRING(2),
      allowNull: false,
      comment: "Tax Country ID"
    },
    tax_region_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Tax Region ID"
    },
    tax_postcode: {
      type: DataTypes.STRING(21),
      allowNull: true,
      comment: "Tax Postcode"
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Code"
    },
    rate: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: false,
      comment: "Rate"
    },
    zip_is_range: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "Zip Is Range"
    },
    zip_from: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Zip From"
    },
    zip_to: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Zip To"
    }
  }, {
    sequelize,
    tableName: 'tax_calculation_rate',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tax_calculation_rate_id" },
        ]
      },
      {
        name: "TAX_CALCULATION_RATE_TAX_COUNTRY_ID_TAX_REGION_ID_TAX_POSTCODE",
        using: "BTREE",
        fields: [
          { name: "tax_country_id" },
          { name: "tax_region_id" },
          { name: "tax_postcode" },
        ]
      },
      {
        name: "TAX_CALCULATION_RATE_CODE",
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "IDX_CA799F1E2CB843495F601E56C84A626D",
        using: "BTREE",
        fields: [
          { name: "tax_calculation_rate_id" },
          { name: "tax_country_id" },
          { name: "tax_region_id" },
          { name: "zip_is_range" },
          { name: "tax_postcode" },
        ]
      },
    ]
  });
};
