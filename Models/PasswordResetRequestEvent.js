const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PasswordResetRequestEvent', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    request_type: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      comment: "Type of the event under a security control"
    },
    account_reference: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "An identifier for existing account or another target"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Timestamp when the event occurs"
    },
    ip: {
      type: DataTypes.STRING(15),
      allowNull: false,
      comment: "Remote user IP"
    }
  }, {
    sequelize,
    tableName: 'password_reset_request_event',
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
        name: "PASSWORD_RESET_REQUEST_EVENT_ACCOUNT_REFERENCE",
        using: "BTREE",
        fields: [
          { name: "account_reference" },
        ]
      },
      {
        name: "PASSWORD_RESET_REQUEST_EVENT_CREATED_AT",
        using: "BTREE",
        fields: [
          { name: "created_at" },
        ]
      },
    ]
  });
};
