const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DirectoryCurrencyRate', {
    currency_from: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      comment: "Currency Code Convert From"
    },
    currency_to: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      comment: "Currency Code Convert To"
    },
    rate: {
      type: DataTypes.DECIMAL(24,12),
      allowNull: false,
      defaultValue: 0.000000000000,
      comment: "Currency Conversion Rate"
    }
  }, {
    sequelize,
    tableName: 'directory_currency_rate',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "currency_from" },
          { name: "currency_to" },
        ]
      },
      {
        name: "DIRECTORY_CURRENCY_RATE_CURRENCY_TO",
        using: "BTREE",
        fields: [
          { name: "currency_to" },
        ]
      },
    ]
  });
};
