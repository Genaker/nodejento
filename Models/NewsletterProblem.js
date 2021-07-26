const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NewsletterProblem', {
    problem_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Problem ID"
    },
    subscriber_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Subscriber ID",
      references: {
        model: 'newsletter_subscriber',
        key: 'subscriber_id'
      }
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
    problem_error_code: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "Problem Error Code"
    },
    problem_error_text: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "Problem Error Text"
    }
  }, {
    sequelize,
    tableName: 'newsletter_problem',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "problem_id" },
        ]
      },
      {
        name: "NEWSLETTER_PROBLEM_SUBSCRIBER_ID",
        using: "BTREE",
        fields: [
          { name: "subscriber_id" },
        ]
      },
      {
        name: "NEWSLETTER_PROBLEM_QUEUE_ID",
        using: "BTREE",
        fields: [
          { name: "queue_id" },
        ]
      },
    ]
  });
};
