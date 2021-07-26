const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesInvoice', {
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
    base_grand_total: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Grand Total"
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
    base_tax_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Tax Amount"
    },
    store_to_order_rate: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Store To Order Rate"
    },
    base_shipping_tax_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Shipping Tax Amount"
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
    base_subtotal_incl_tax: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Subtotal Incl Tax"
    },
    store_to_base_rate: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Store To Base Rate"
    },
    base_shipping_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Shipping Amount"
    },
    total_qty: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Total Qty"
    },
    base_to_global_rate: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base To Global Rate"
    },
    subtotal: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Subtotal"
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
    billing_address_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Billing Address ID"
    },
    is_used_for_refund: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Is Used For Refund"
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
    can_void_flag: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Can Void Flag"
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
    store_currency_code: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "Store Currency Code"
    },
    transaction_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Transaction ID"
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
    base_total_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Total Refunded"
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
    tableName: 'sales_invoice',
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
        name: "SALES_INVOICE_INCREMENT_ID_STORE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "increment_id" },
          { name: "store_id" },
        ]
      },
      {
        name: "SALES_INVOICE_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
      {
        name: "SALES_INVOICE_GRAND_TOTAL",
        using: "BTREE",
        fields: [
          { name: "grand_total" },
        ]
      },
      {
        name: "SALES_INVOICE_ORDER_ID",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "SALES_INVOICE_STATE",
        using: "BTREE",
        fields: [
          { name: "state" },
        ]
      },
      {
        name: "SALES_INVOICE_CREATED_AT",
        using: "BTREE",
        fields: [
          { name: "created_at" },
        ]
      },
      {
        name: "SALES_INVOICE_UPDATED_AT",
        using: "BTREE",
        fields: [
          { name: "updated_at" },
        ]
      },
      {
        name: "SALES_INVOICE_SEND_EMAIL",
        using: "BTREE",
        fields: [
          { name: "send_email" },
        ]
      },
      {
        name: "SALES_INVOICE_EMAIL_SENT",
        using: "BTREE",
        fields: [
          { name: "email_sent" },
        ]
      },
    ]
  });
};
