const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesCreditmemo', {
    entity_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
      }
    },
    adjustment_positive: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Adjustment Positive"
    },
    base_shipping_tax_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Shipping Tax Amount"
    },
    store_to_order_rate: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Store To Order Rate"
    },
    base_discount_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Discount Amount"
    },
    base_to_order_rate: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base To Order Rate"
    },
    grand_total: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Grand Total"
    },
    base_adjustment_negative: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Adjustment Negative"
    },
    base_subtotal_incl_tax: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Subtotal Incl Tax"
    },
    shipping_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Shipping Amount"
    },
    subtotal_incl_tax: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Subtotal Incl Tax"
    },
    adjustment_negative: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Adjustment Negative"
    },
    base_shipping_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Shipping Amount"
    },
    store_to_base_rate: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Store To Base Rate"
    },
    base_to_global_rate: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base To Global Rate"
    },
    base_adjustment: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Adjustment"
    },
    base_subtotal: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Subtotal"
    },
    discount_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Discount Amount"
    },
    subtotal: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Subtotal"
    },
    adjustment: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Adjustment"
    },
    base_grand_total: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Grand Total"
    },
    base_adjustment_positive: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Adjustment Positive"
    },
    base_tax_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Tax Amount"
    },
    shipping_tax_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Shipping Tax Amount"
    },
    tax_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Tax Amount"
    },
    order_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Order ID",
      references: {
        model: 'sales_order',
        key: 'entity_id'
      }
    },
    email_sent: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Email Sent"
    },
    send_email: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Send Email"
    },
    creditmemo_status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Creditmemo Status"
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "State"
    },
    shipping_address_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Shipping Address ID"
    },
    billing_address_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Billing Address ID"
    },
    invoice_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Invoice ID"
    },
    store_currency_code: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "Store Currency Code"
    },
    order_currency_code: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "Order Currency Code"
    },
    base_currency_code: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "Base Currency Code"
    },
    global_currency_code: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "Global Currency Code"
    },
    transaction_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Transaction ID"
    },
    increment_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Increment ID"
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
    discount_tax_compensation_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Discount Tax Compensation Amount"
    },
    base_discount_tax_compensation_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Discount Tax Compensation Amount"
    },
    shipping_discount_tax_compensation_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Shipping Discount Tax Compensation Amount"
    },
    base_shipping_discount_tax_compensation_amnt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Shipping Discount Tax Compensation Amount"
    },
    shipping_incl_tax: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Shipping Incl Tax"
    },
    base_shipping_incl_tax: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Shipping Incl Tax"
    },
    discount_description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Discount Description"
    },
    customer_note: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Customer Note"
    },
    customer_note_notify: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Customer Note Notify"
    }
  }, {
    sequelize,
    tableName: 'sales_creditmemo',
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
        name: "SALES_CREDITMEMO_INCREMENT_ID_STORE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "increment_id" },
          { name: "store_id" },
        ]
      },
      {
        name: "SALES_CREDITMEMO_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
      {
        name: "SALES_CREDITMEMO_ORDER_ID",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "SALES_CREDITMEMO_CREDITMEMO_STATUS",
        using: "BTREE",
        fields: [
          { name: "creditmemo_status" },
        ]
      },
      {
        name: "SALES_CREDITMEMO_STATE",
        using: "BTREE",
        fields: [
          { name: "state" },
        ]
      },
      {
        name: "SALES_CREDITMEMO_CREATED_AT",
        using: "BTREE",
        fields: [
          { name: "created_at" },
        ]
      },
      {
        name: "SALES_CREDITMEMO_UPDATED_AT",
        using: "BTREE",
        fields: [
          { name: "updated_at" },
        ]
      },
      {
        name: "SALES_CREDITMEMO_SEND_EMAIL",
        using: "BTREE",
        fields: [
          { name: "send_email" },
        ]
      },
      {
        name: "SALES_CREDITMEMO_EMAIL_SENT",
        using: "BTREE",
        fields: [
          { name: "email_sent" },
        ]
      },
    ]
  });
};
