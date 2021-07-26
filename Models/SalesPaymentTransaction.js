const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesPaymentTransaction', {
    transaction_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Transaction ID"
    },
    parent_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Parent ID",
      references: {
        model: 'sales_payment_transaction',
        key: 'transaction_id'
      }
    },
    order_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Order ID",
      references: {
        model: 'sales_order',
        key: 'entity_id'
      }
    },
    payment_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Payment ID",
      references: {
        model: 'sales_order_payment',
        key: 'entity_id'
      }
    },
    txn_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "Txn ID"
    },
    parent_txn_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "Parent Txn ID"
    },
    txn_type: {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "Txn Type"
    },
    is_closed: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "Is Closed"
    },
    additional_information: {
      type: DataTypes.BLOB,
      allowNull: true,
      comment: "Additional Information"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Created At"
    }
  }, {
    sequelize,
    tableName: 'sales_payment_transaction',
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
        name: "SALES_PAYMENT_TRANSACTION_ORDER_ID_PAYMENT_ID_TXN_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_id" },
          { name: "payment_id" },
          { name: "txn_id" },
        ]
      },
      {
        name: "SALES_PAYMENT_TRANSACTION_PARENT_ID",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
      {
        name: "SALES_PAYMENT_TRANSACTION_PAYMENT_ID",
        using: "BTREE",
        fields: [
          { name: "payment_id" },
        ]
      },
    ]
  });
};
