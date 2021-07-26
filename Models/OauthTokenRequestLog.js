const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OauthTokenRequestLog', {
    log_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Log ID"
    },
    user_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Customer email or admin login"
    },
    user_type: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      comment: "User type (admin or customer)"
    },
    failures_count: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "Number of failed authentication attempts in a row"
    },
    lock_expires_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Lock expiration time"
    }
  }, {
    sequelize,
    tableName: 'oauth_token_request_log',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "log_id" },
        ]
      },
      {
        name: "OAUTH_TOKEN_REQUEST_LOG_USER_NAME_USER_TYPE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_name" },
          { name: "user_type" },
        ]
      },
    ]
  });
};
