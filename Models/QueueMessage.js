const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QueueMessage', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Message ID"
    },
    topic_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Message topic"
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Message body"
    }
  }, {
    sequelize,
    tableName: 'queue_message',
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
    ]
  });
};
