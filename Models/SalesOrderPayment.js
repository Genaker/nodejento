const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesOrderPayment', {
    entity_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    parent_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Parent ID",
      references: {
        model: 'sales_order',
        key: 'entity_id'
      }
    },
    base_shipping_captured: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Shipping Captured"
    },
    shipping_captured: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Shipping Captured"
    },
    amount_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Amount Refunded"
    },
    base_amount_paid: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Amount Paid"
    },
    amount_canceled: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Amount Canceled"
    },
    base_amount_authorized: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Amount Authorized"
    },
    base_amount_paid_online: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Amount Paid Online"
    },
    base_amount_refunded_online: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Amount Refunded Online"
    },
    base_shipping_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Shipping Amount"
    },
    shipping_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Shipping Amount"
    },
    amount_paid: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Amount Paid"
    },
    amount_authorized: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Amount Authorized"
    },
    base_amount_ordered: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Amount Ordered"
    },
    base_shipping_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Shipping Refunded"
    },
    shipping_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Shipping Refunded"
    },
    base_amount_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Amount Refunded"
    },
    amount_ordered: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Amount Ordered"
    },
    base_amount_canceled: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Amount Canceled"
    },
    quote_payment_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Quote Payment ID"
    },
    additional_data: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Additional Data"
    },
    cc_exp_month: {
      type: DataTypes.STRING(12),
      allowNull: true,
      comment: "Cc Exp Month"
    },
    cc_ss_start_year: {
      type: DataTypes.STRING(12),
      allowNull: true,
      comment: "Cc Ss Start Year"
    },
    echeck_bank_name: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: "Echeck Bank Name"
    },
    method: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: "Method"
    },
    cc_debug_request_body: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Cc Debug Request Body"
    },
    cc_secure_verify: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Cc Secure Verify"
    },
    protection_eligibility: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Protection Eligibility"
    },
    cc_approval: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Cc Approval"
    },
    cc_last_4: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "Cc Last 4"
    },
    cc_status_description: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Cc Status Description"
    },
    echeck_type: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Echeck Type"
    },
    cc_debug_response_serialized: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Cc Debug Response Serialized"
    },
    cc_ss_start_month: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: "Cc Ss Start Month"
    },
    echeck_account_type: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Echeck Account Type"
    },
    last_trans_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Last Trans ID"
    },
    cc_cid_status: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Cc Cid Status"
    },
    cc_owner: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: "Cc Owner"
    },
    cc_type: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Cc Type"
    },
    po_number: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Po Number"
    },
    cc_exp_year: {
      type: DataTypes.STRING(4),
      allowNull: true,
      comment: "Cc Exp Year"
    },
    cc_status: {
      type: DataTypes.STRING(4),
      allowNull: true,
      comment: "Cc Status"
    },
    echeck_routing_number: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Echeck Routing Number"
    },
    account_status: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Account Status"
    },
    anet_trans_method: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Anet Trans Method"
    },
    cc_debug_response_body: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Cc Debug Response Body"
    },
    cc_ss_issue: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Cc Ss Issue"
    },
    echeck_account_name: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Echeck Account Name"
    },
    cc_avs_status: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Cc Avs Status"
    },
    cc_number_enc: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    cc_trans_id: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Cc Trans ID"
    },
    address_status: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Address Status"
    },
    additional_information: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Additional Information"
    }
  }, {
    sequelize,
    tableName: 'sales_order_payment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "entity_id" },
        ]
      },
      {
        name: "SALES_ORDER_PAYMENT_PARENT_ID",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
    ]
  });
};
