const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GiftMessage', {
    gift_message_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "GiftMessage ID"
    },
    customer_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Customer ID"
    },
    sender: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Sender"
    },
    recipient: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Registrant"
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Message"
    }
  }, {
    sequelize,
    tableName: 'gift_message',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "gift_message_id" },
        ]
      },
    ]
  });
};
