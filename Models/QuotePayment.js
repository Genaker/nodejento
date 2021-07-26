const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QuotePayment', {
    payment_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Payment ID"
    },
    quote_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Quote ID",
      references: {
        model: 'quote',
        key: 'entity_id'
      }
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Created At"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Updated At"
    },
    method: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Method"
    },
    cc_type: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Cc Type"
    },
    cc_number_enc: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Cc Number Enc"
    },
    cc_last_4: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Cc Last 4"
    },
    cc_cid_enc: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Cc Cid Enc"
    },
    cc_owner: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Cc Owner"
    },
    cc_exp_month: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Cc Exp Month"
    },
    cc_exp_year: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "Cc Exp Year"
    },
    cc_ss_owner: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Cc Ss Owner"
    },
    cc_ss_start_month: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "Cc Ss Start Month"
    },
    cc_ss_start_year: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "Cc Ss Start Year"
    },
    po_number: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Po Number"
    },
    additional_data: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Additional Data"
    },
    cc_ss_issue: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Cc Ss Issue"
    },
    additional_information: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Additional Information"
    },
    paypal_payer_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Paypal Payer ID"
    },
    paypal_payer_status: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Paypal Payer Status"
    },
    paypal_correlation_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Paypal Correlation ID"
    }
  }, {
    sequelize,
    tableName: 'quote_payment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "payment_id" },
        ]
      },
      {
        name: "QUOTE_PAYMENT_QUOTE_ID",
        using: "BTREE",
        fields: [
          { name: "quote_id" },
        ]
      },
    ]
  });
};
