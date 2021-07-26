const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StoreWebsite', {
    website_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Website ID"
    },
    code: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Code",
      unique: "STORE_WEBSITE_CODE"
    },
    name: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "Website Name"
    },
    sort_order: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Sort Order"
    },
    default_group_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Default Group ID"
    },
    is_default: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "Defines Is Website Default"
    }
  }, {
    sequelize,
    tableName: 'store_website',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "website_id" },
        ]
      },
      {
        name: "STORE_WEBSITE_CODE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "STORE_WEBSITE_SORT_ORDER",
        using: "BTREE",
        fields: [
          { name: "sort_order" },
        ]
      },
      {
        name: "STORE_WEBSITE_DEFAULT_GROUP_ID",
        using: "BTREE",
        fields: [
          { name: "default_group_id" },
        ]
      },
    ]
  });
};
