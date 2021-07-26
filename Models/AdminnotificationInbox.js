const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AdminnotificationInbox', {
    notification_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Notification ID"
    },
    severity: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Problem type"
    },
    date_added: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Create date"
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Title"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Description"
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Url"
    },
    is_read: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Flag if notification read"
    },
    is_remove: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Flag if notification might be removed"
    }
  }, {
    sequelize,
    tableName: 'adminnotification_inbox',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "notification_id" },
        ]
      },
      {
        name: "ADMINNOTIFICATION_INBOX_SEVERITY",
        using: "BTREE",
        fields: [
          { name: "severity" },
        ]
      },
      {
        name: "ADMINNOTIFICATION_INBOX_IS_READ",
        using: "BTREE",
        fields: [
          { name: "is_read" },
        ]
      },
      {
        name: "ADMINNOTIFICATION_INBOX_IS_REMOVE",
        using: "BTREE",
        fields: [
          { name: "is_remove" },
        ]
      },
    ]
  });
};
