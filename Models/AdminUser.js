const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AdminUser', {
    user_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "User ID"
    },
    firstname: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "User First Name"
    },
    lastname: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "User Last Name"
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: "User Email"
    },
    username: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "User Login",
      unique: "ADMIN_USER_USERNAME"
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "User Password"
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "User Created Time"
    },
    modified: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "User Modified Time"
    },
    logdate: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "User Last Login Time"
    },
    lognum: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "User Login Number"
    },
    reload_acl_flag: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Reload ACL"
    },
    is_active: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1,
      comment: "User Is Active"
    },
    extra: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "User Extra Data"
    },
    rp_token: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Reset Password Link Token"
    },
    rp_token_created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Reset Password Link Token Creation Date"
    },
    interface_locale: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: "en_US",
      comment: "Backend interface locale"
    },
    failures_num: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      comment: "Failure Number"
    },
    first_failure: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "First Failure"
    },
    lock_expires: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Expiration Lock Dates"
    }
  }, {
    sequelize,
    tableName: 'admin_user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "ADMIN_USER_USERNAME",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "username" },
        ]
      },
    ]
  });
};
