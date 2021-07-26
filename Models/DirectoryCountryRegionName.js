const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DirectoryCountryRegionName', {
    locale: {
      type: DataTypes.STRING(16),
      allowNull: false,
      primaryKey: true,
      comment: "Locale"
    },
    region_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "Region ID",
      references: {
        model: 'directory_country_region',
        key: 'region_id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Region Name"
    }
  }, {
    sequelize,
    tableName: 'directory_country_region_name',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "locale" },
          { name: "region_id" },
        ]
      },
      {
        name: "DIRECTORY_COUNTRY_REGION_NAME_REGION_ID",
        using: "BTREE",
        fields: [
          { name: "region_id" },
        ]
      },
    ]
  });
};
