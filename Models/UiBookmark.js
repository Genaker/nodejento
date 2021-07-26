const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UiBookmark', {
    bookmark_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Bookmark identifier"
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "User ID",
      references: {
        model: 'admin_user',
        key: 'user_id'
      }
    },
    namespace: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Bookmark namespace"
    },
    identifier: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Bookmark Identifier"
    },
    current: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "Mark current bookmark per user and identifier"
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Bookmark title"
    },
    config: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Bookmark config"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Bookmark created at"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Bookmark updated at"
    }
  }, {
    sequelize,
    tableName: 'ui_bookmark',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bookmark_id" },
        ]
      },
      {
        name: "UI_BOOKMARK_USER_ID_NAMESPACE_IDENTIFIER",
        using: "BTREE",
        fields: [
          { name: "user_id" },
          { name: "namespace" },
          { name: "identifier" },
        ]
      },
    ]
  });
};
