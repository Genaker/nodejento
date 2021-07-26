const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NewsletterQueue', {
    queue_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Queue ID"
    },
    template_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Template ID",
      references: {
        model: 'newsletter_template',
        key: 'template_id'
      }
    },
    newsletter_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Newsletter Type"
    },
    newsletter_text: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Newsletter Text"
    },
    newsletter_styles: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Newsletter Styles"
    },
    newsletter_subject: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "Newsletter Subject"
    },
    newsletter_sender_name: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "Newsletter Sender Name"
    },
    newsletter_sender_email: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "Newsletter Sender Email"
    },
    queue_status: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Queue Status"
    },
    queue_start_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Queue Start At"
    },
    queue_finish_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Queue Finish At"
    }
  }, {
    sequelize,
    tableName: 'newsletter_queue',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "queue_id" },
        ]
      },
      {
        name: "NEWSLETTER_QUEUE_TEMPLATE_ID",
        using: "BTREE",
        fields: [
          { name: "template_id" },
        ]
      },
    ]
  });
};
