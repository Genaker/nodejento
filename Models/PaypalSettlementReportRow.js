const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PaypalSettlementReportRow', {
    row_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Row ID"
    },
    report_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Report ID",
      references: {
        model: 'paypal_settlement_report',
        key: 'report_id'
      }
    },
    transaction_id: {
      type: DataTypes.STRING(19),
      allowNull: true,
      comment: "Transaction ID"
    },
    invoice_id: {
      type: DataTypes.STRING(127),
      allowNull: true,
      comment: "Invoice ID"
    },
    paypal_reference_id: {
      type: DataTypes.STRING(19),
      allowNull: true,
      comment: "Paypal Reference ID"
    },
    paypal_reference_id_type: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "Paypal Reference ID Type"
    },
    transaction_event_code: {
      type: DataTypes.STRING(5),
      allowNull: true,
      comment: "Transaction Event Code"
    },
    transaction_initiation_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Transaction Initiation Date"
    },
    transaction_completion_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Transaction Completion Date"
    },
    transaction_debit_or_credit: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "CR",
      comment: "Transaction Debit Or Credit"
    },
    gross_transaction_amount: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false,
      defaultValue: 0.000000,
      comment: "Gross Transaction Amount"
    },
    gross_transaction_currency: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "Gross Transaction Currency"
    },
    fee_debit_or_credit: {
      type: DataTypes.STRING(2),
      allowNull: true,
      comment: "Fee Debit Or Credit"
    },
    fee_amount: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false,
      defaultValue: 0.000000,
      comment: "Fee Amount"
    },
    fee_currency: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "Fee Currency"
    },
    custom_field: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Custom Field"
    },
    consumer_id: {
      type: DataTypes.STRING(127),
      allowNull: true,
      comment: "Consumer ID"
    },
    payment_tracking_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Payment Tracking ID"
    },
    store_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Store ID"
    }
  }, {
    sequelize,
    tableName: 'paypal_settlement_report_row',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "row_id" },
        ]
      },
      {
        name: "PAYPAL_SETTLEMENT_REPORT_ROW_REPORT_ID",
        using: "BTREE",
        fields: [
          { name: "report_id" },
        ]
      },
    ]
  });
};
