const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QueueLock', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Message ID"
    },
    message_code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      comment: "Message Code",
      unique: "QUEUE_LOCK_MESSAGE_CODE"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Created At"
    }
  }, {
    sequelize,
    tableName: 'queue_lock',
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
        name: "QUEUE_LOCK_MESSAGE_CODE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "message_code" },
        ]
      },
    ]
  });
};
