const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReleaseNotificationViewerLog', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Log ID"
    },
    viewer_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Viewer admin user ID",
      references: {
        model: 'admin_user',
        key: 'user_id'
      },
      unique: "RELEASE_NOTIFICATION_VIEWER_LOG_VIEWER_ID_ADMIN_USER_USER_ID"
    },
    last_view_version: {
      type: DataTypes.STRING(16),
      allowNull: false,
      comment: "Viewer last view on product version"
    }
  }, {
    sequelize,
    tableName: 'release_notification_viewer_log',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "RELEASE_NOTIFICATION_VIEWER_LOG_VIEWER_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "viewer_id" },
        ]
      },
    ]
  });
};
