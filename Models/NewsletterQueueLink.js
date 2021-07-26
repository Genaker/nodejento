const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NewsletterQueueLink', {
    queue_link_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Queue Link ID"
    },
    queue_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Queue ID",
      references: {
        model: 'newsletter_queue',
        key: 'queue_id'
      }
    },
    subscriber_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Subscriber ID",
      references: {
        model: 'newsletter_subscriber',
        key: 'subscriber_id'
      }
    },
    letter_sent_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Letter Sent At"
    }
  }, {
    sequelize,
    tableName: 'newsletter_queue_link',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "queue_link_id" },
        ]
      },
      {
        name: "NEWSLETTER_QUEUE_LINK_SUBSCRIBER_ID",
        using: "BTREE",
        fields: [
          { name: "subscriber_id" },
        ]
      },
      {
        name: "NEWSLETTER_QUEUE_LINK_QUEUE_ID_LETTER_SENT_AT",
        using: "BTREE",
        fields: [
          { name: "queue_id" },
          { name: "letter_sent_at" },
        ]
      },
    ]
  });
};
