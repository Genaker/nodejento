const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AdminAnalyticsUsageVersionLog', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Log ID"
    },
    last_viewed_in_version: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Viewer last viewed on product version",
      unique: "ADMIN_ANALYTICS_USAGE_VERSION_LOG_LAST_VIEWED_IN_VERSION"
    }
  }, {
    sequelize,
    tableName: 'admin_analytics_usage_version_log',
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
        name: "ADMIN_ANALYTICS_USAGE_VERSION_LOG_LAST_VIEWED_IN_VERSION",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "last_viewed_in_version" },
        ]
      },
    ]
  });
};
