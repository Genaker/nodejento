const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AdminUserSession', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    session_id: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: "Session ID value"
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Admin User ID",
      references: {
        model: 'admin_user',
        key: 'user_id'
      }
    },
    status: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "Current Session status"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Created Time"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Update Time"
    },
    ip: {
      type: DataTypes.STRING(15),
      allowNull: false,
      comment: "Remote user IP"
    }
  }, {
    sequelize,
    tableName: 'admin_user_session',
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
        name: "ADMIN_USER_SESSION_SESSION_ID",
        using: "BTREE",
        fields: [
          { name: "session_id" },
        ]
      },
      {
        name: "ADMIN_USER_SESSION_USER_ID",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
