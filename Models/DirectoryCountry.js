const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DirectoryCountry', {
    country_id: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      comment: "Country ID in ISO-2"
    },
    iso2_code: {
      type: DataTypes.STRING(2),
      allowNull: true,
      comment: "Country ISO-2 format"
    },
    iso3_code: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "Country ISO-3"
    }
  }, {
    sequelize,
    tableName: 'directory_country',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "country_id" },
        ]
      },
    ]
  });
};
