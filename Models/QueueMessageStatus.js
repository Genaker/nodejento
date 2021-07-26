const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QueueMessageStatus', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Relation ID"
    },
    queue_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Queue ID",
      references: {
        model: 'queue',
        key: 'id'
      }
    },
    message_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      comment: "Message ID",
      references: {
        model: 'queue_message',
        key: 'id'
      }
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Updated At"
    },
    status: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      comment: "Message status in particular queue"
    },
    number_of_trials: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Number of trials to processed failed message processing"
    }
  }, {
    sequelize,
    tableName: 'queue_message_status',
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
        name: "QUEUE_MESSAGE_STATUS_QUEUE_ID_MESSAGE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "queue_id" },
          { name: "message_id" },
        ]
      },
      {
        name: "QUEUE_MESSAGE_STATUS_MESSAGE_ID_QUEUE_MESSAGE_ID",
        using: "BTREE",
        fields: [
          { name: "message_id" },
        ]
      },
      {
        name: "QUEUE_MESSAGE_STATUS_STATUS_UPDATED_AT",
        using: "BTREE",
        fields: [
          { name: "status" },
          { name: "updated_at" },
        ]
      },
    ]
  });
};
