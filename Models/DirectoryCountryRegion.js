const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DirectoryCountryRegion', {
    region_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Region ID"
    },
    country_id: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "0",
      comment: "Country ID in ISO-2"
    },
    code: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Region code"
    },
    default_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Region Name"
    }
  }, {
    sequelize,
    tableName: 'directory_country_region',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "region_id" },
        ]
      },
      {
        name: "DIRECTORY_COUNTRY_REGION_COUNTRY_ID",
        using: "BTREE",
        fields: [
          { name: "country_id" },
        ]
      },
    ]
  });
};
