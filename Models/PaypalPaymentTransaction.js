const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PaypalPaymentTransaction', {
    transaction_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    txn_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "Txn ID",
      unique: "PAYPAL_PAYMENT_TRANSACTION_TXN_ID"
    },
    additional_information: {
      type: DataTypes.BLOB,
      allowNull: true,
      comment: "Additional Information"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Created At"
    }
  }, {
    sequelize,
    tableName: 'paypal_payment_transaction',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "transaction_id" },
        ]
      },
      {
        name: "PAYPAL_PAYMENT_TRANSACTION_TXN_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "txn_id" },
        ]
      },
    ]
  });
};
