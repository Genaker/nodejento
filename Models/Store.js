const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Store', {
    store_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Store ID"
    },
    code: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Code",
      unique: "STORE_CODE"
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
    group_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Group ID",
      references: {
        model: 'store_group',
        key: 'group_id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Store Name"
    },
    sort_order: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Store Sort Order"
    },
    is_active: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Store Activity"
    }
  }, {
    sequelize,
    tableName: 'store',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
      {
        name: "STORE_CODE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
      {
        name: "STORE_WEBSITE_ID",
        using: "BTREE",
        fields: [
          { name: "website_id" },
        ]
      },
      {
        name: "STORE_IS_ACTIVE_SORT_ORDER",
        using: "BTREE",
        fields: [
          { name: "is_active" },
          { name: "sort_order" },
        ]
      },
      {
        name: "STORE_GROUP_ID",
        using: "BTREE",
        fields: [
          { name: "group_id" },
        ]
      },
    ]
  });
};
