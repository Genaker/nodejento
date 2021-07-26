const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StoreGroup', {
    group_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Group ID"
    },
    website_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Website ID",
      references: {
        model: 'store_website',
        key: 'website_id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Store Group Name"
    },
    root_category_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Root Category ID"
    },
    default_store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Default Store ID"
    },
    code: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Store group unique code",
      unique: "STORE_GROUP_CODE"
    }
  }, {
    sequelize,
    tableName: 'store_group',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "group_id" },
        ]
      },
      {
        name: "STORE_GROUP_CODE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "STORE_GROUP_WEBSITE_ID",
        using: "BTREE",
        fields: [
          { name: "website_id" },
        ]
      },
      {
        name: "STORE_GROUP_DEFAULT_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "default_store_id" },
        ]
      },
    ]
  });
};
