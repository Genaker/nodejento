const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NewsletterSubscriber', {
    subscriber_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Subscriber ID"
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
      }
    },
    change_status_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Change Status At"
    },
    customer_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Customer ID"
    },
    subscriber_email: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "Subscriber Email"
    },
    subscriber_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Subscriber Status"
    },
    subscriber_confirm_code: {
      type: DataTypes.STRING(32),
      allowNull: true,
      defaultValue: "NULL",
      comment: "Subscriber Confirm Code"
    }
  }, {
    sequelize,
    tableName: 'newsletter_subscriber',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "subscriber_id" },
        ]
      },
      {
        name: "NEWSLETTER_SUBSCRIBER_CUSTOMER_ID",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "NEWSLETTER_SUBSCRIBER_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
      {
        name: "NEWSLETTER_SUBSCRIBER_SUBSCRIBER_EMAIL",
        using: "BTREE",
        fields: [
          { name: "subscriber_email" },
        ]
      },
    ]
  });
};
