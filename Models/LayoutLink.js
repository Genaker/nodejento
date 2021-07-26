const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LayoutLink', {
    layout_link_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Link ID"
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
      }
    },
    theme_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Theme ID",
      references: {
        model: 'theme',
        key: 'theme_id'
      }
    },
    layout_update_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Layout Update ID",
      references: {
        model: 'layout_update',
        key: 'layout_update_id'
      }
    },
    is_temporary: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "Defines whether Layout Update is Temporary"
    }
  }, {
    sequelize,
    tableName: 'layout_link',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "layout_link_id" },
        ]
      },
      {
        name: "LAYOUT_LINK_THEME_ID_THEME_THEME_ID",
        using: "BTREE",
        fields: [
          { name: "theme_id" },
        ]
      },
      {
        name: "LAYOUT_LINK_LAYOUT_UPDATE_ID",
        using: "BTREE",
        fields: [
          { name: "layout_update_id" },
        ]
      },
      {
        name: "LAYOUT_LINK_STORE_ID_THEME_ID_LAYOUT_UPDATE_ID_IS_TEMPORARY",
        using: "BTREE",
        fields: [
          { name: "store_id" },
          { name: "theme_id" },
          { name: "layout_update_id" },
          { name: "is_temporary" },
        ]
      },
    ]
  });
};
