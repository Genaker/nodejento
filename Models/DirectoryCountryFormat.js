const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DirectoryCountryFormat', {
    country_format_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Country Format ID"
    },
    country_id: {
      type: DataTypes.STRING(2),
      allowNull: true,
      comment: "Country ID in ISO-2"
    },
    type: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "Country Format Type"
    },
    format: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "Country Format"
    }
  }, {
    sequelize,
    tableName: 'directory_country_format',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "country_format_id" },
        ]
      },
      {
        name: "DIRECTORY_COUNTRY_FORMAT_COUNTRY_ID_TYPE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "country_id" },
          { name: "type" },
        ]
      },
    ]
  });
};
