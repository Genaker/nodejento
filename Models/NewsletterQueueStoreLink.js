const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NewsletterQueueStoreLink', {
    queue_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "Queue ID",
      references: {
        model: 'newsletter_queue',
        key: 'queue_id'
      }
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
      }
    }
  }, {
    sequelize,
    tableName: 'newsletter_queue_store_link',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "queue_id" },
          { name: "store_id" },
        ]
      },
      {
        name: "NEWSLETTER_QUEUE_STORE_LINK_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
