const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesOrder', {
    entity_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    state: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "State"
    },
    status: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Status"
    },
    coupon_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Coupon Code"
    },
    protect_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Protect Code"
    },
    shipping_description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Shipping Description"
    },
    is_virtual: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Is Virtual"
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
    customer_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Customer ID",
      references: {
        model: 'customer_entity',
        key: 'entity_id'
      }
    },
    base_discount_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Discount Amount"
    },
    base_discount_canceled: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Discount Canceled"
    },
    base_discount_invoiced: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Discount Invoiced"
    },
    base_discount_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Discount Refunded"
    },
    base_grand_total: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Grand Total"
    },
    base_shipping_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Shipping Amount"
    },
    base_shipping_canceled: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Shipping Canceled"
    },
    base_shipping_invoiced: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Shipping Invoiced"
    },
    base_shipping_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Shipping Refunded"
    },
    base_shipping_tax_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Shipping Tax Amount"
    },
    base_shipping_tax_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Shipping Tax Refunded"
    },
    base_subtotal: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Subtotal"
    },
    base_subtotal_canceled: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Subtotal Canceled"
    },
    base_subtotal_invoiced: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Subtotal Invoiced"
    },
    base_subtotal_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Subtotal Refunded"
    },
    base_tax_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Tax Amount"
    },
    base_tax_canceled: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Tax Canceled"
    },
    base_tax_invoiced: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Tax Invoiced"
    },
    base_tax_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Tax Refunded"
    },
    base_to_global_rate: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base To Global Rate"
    },
    base_to_order_rate: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base To Order Rate"
    },
    base_total_canceled: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Total Canceled"
    },
    base_total_invoiced: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Total Invoiced"
    },
    base_total_invoiced_cost: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Total Invoiced Cost"
    },
    base_total_offline_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Total Offline Refunded"
    },
    base_total_online_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Total Online Refunded"
    },
    base_total_paid: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Total Paid"
    },
    base_total_qty_ordered: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Base Total Qty Ordered"
    },
    base_total_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Total Refunded"
    },
    discount_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Discount Amount"
    },
    discount_canceled: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Discount Canceled"
    },
    discount_invoiced: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Discount Invoiced"
    },
    discount_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Discount Refunded"
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
    shipping_canceled: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Shipping Canceled"
    },
    shipping_invoiced: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Shipping Invoiced"
    },
    shipping_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Shipping Refunded"
    },
    shipping_tax_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Shipping Tax Amount"
    },
    shipping_tax_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Shipping Tax Refunded"
    },
    store_to_base_rate: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Store To Base Rate"
    },
    store_to_order_rate: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Store To Order Rate"
    },
    subtotal: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Subtotal"
    },
    subtotal_canceled: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Subtotal Canceled"
    },
    subtotal_invoiced: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Subtotal Invoiced"
    },
    subtotal_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Subtotal Refunded"
    },
    tax_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Tax Amount"
    },
    tax_canceled: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Tax Canceled"
    },
    tax_invoiced: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Tax Invoiced"
    },
    tax_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Tax Refunded"
    },
    total_canceled: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Total Canceled"
    },
    total_invoiced: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Total Invoiced"
    },
    total_offline_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Total Offline Refunded"
    },
    total_online_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Total Online Refunded"
    },
    total_paid: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Total Paid"
    },
    total_qty_ordered: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Total Qty Ordered"
    },
    total_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Total Refunded"
    },
    can_ship_partially: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Can Ship Partially"
    },
    can_ship_partially_item: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Can Ship Partially Item"
    },
    customer_is_guest: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Customer Is Guest"
    },
    customer_note_notify: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Customer Note Notify"
    },
    billing_address_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Billing Address ID"
    },
    customer_group_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    edit_increment: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Edit Increment"
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
    forced_shipment_with_invoice: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Forced Do Shipment With Invoice"
    },
    payment_auth_expiration: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Payment Authorization Expiration"
    },
    quote_address_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Quote Address ID"
    },
    quote_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Quote ID"
    },
    shipping_address_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Shipping Address ID"
    },
    adjustment_negative: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Adjustment Negative"
    },
    adjustment_positive: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Adjustment Positive"
    },
    base_adjustment_negative: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Adjustment Negative"
    },
    base_adjustment_positive: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Adjustment Positive"
    },
    base_shipping_discount_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Shipping Discount Amount"
    },
    base_subtotal_incl_tax: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Subtotal Incl Tax"
    },
    base_total_due: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Total Due"
    },
    payment_authorization_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Payment Authorization Amount"
    },
    shipping_discount_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Shipping Discount Amount"
    },
    subtotal_incl_tax: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Subtotal Incl Tax"
    },
    total_due: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Total Due"
    },
    weight: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Weight"
    },
    customer_dob: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Customer Dob"
    },
    increment_id: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Increment ID"
    },
    applied_rule_ids: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: "Applied Rule Ids"
    },
    base_currency_code: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "Base Currency Code"
    },
    customer_email: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: "Customer Email"
    },
    customer_firstname: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: "Customer Firstname"
    },
    customer_lastname: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: "Customer Lastname"
    },
    customer_middlename: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: "Customer Middlename"
    },
    customer_prefix: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Customer Prefix"
    },
    customer_suffix: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Customer Suffix"
    },
    customer_taxvat: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Customer Taxvat"
    },
    discount_description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Discount Description"
    },
    ext_customer_id: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Ext Customer ID"
    },
    ext_order_id: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Ext Order ID"
    },
    global_currency_code: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "Global Currency Code"
    },
    hold_before_state: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Hold Before State"
    },
    hold_before_status: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Hold Before Status"
    },
    order_currency_code: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "Order Currency Code"
    },
    original_increment_id: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Original Increment ID"
    },
    relation_child_id: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Relation Child ID"
    },
    relation_child_real_id: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Relation Child Real ID"
    },
    relation_parent_id: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Relation Parent ID"
    },
    relation_parent_real_id: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Relation Parent Real ID"
    },
    remote_ip: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "Remote Ip"
    },
    shipping_method: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    store_currency_code: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "Store Currency Code"
    },
    store_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Store Name"
    },
    x_forwarded_for: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "X Forwarded For"
    },
    customer_note: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Customer Note"
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
    total_item_count: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Total Item Count"
    },
    customer_gender: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Customer Gender"
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
    discount_tax_compensation_invoiced: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Discount Tax Compensation Invoiced"
    },
    base_discount_tax_compensation_invoiced: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Discount Tax Compensation Invoiced"
    },
    discount_tax_compensation_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Discount Tax Compensation Refunded"
    },
    base_discount_tax_compensation_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Discount Tax Compensation Refunded"
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
    coupon_rule_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Coupon Sales Rule Name"
    },
    gift_message_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Gift Message ID"
    },
    paypal_ipn_customer_notified: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "Paypal Ipn Customer Notified"
    }
  }, {
    sequelize,
    tableName: 'sales_order',
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
        name: "SALES_ORDER_INCREMENT_ID_STORE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "increment_id" },
          { name: "store_id" },
        ]
      },
      {
        name: "SALES_ORDER_STATUS",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
      {
        name: "SALES_ORDER_STATE",
        using: "BTREE",
        fields: [
          { name: "state" },
        ]
      },
      {
        name: "SALES_ORDER_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
      {
        name: "SALES_ORDER_CREATED_AT",
        using: "BTREE",
        fields: [
          { name: "created_at" },
        ]
      },
      {
        name: "SALES_ORDER_CUSTOMER_ID",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "SALES_ORDER_EXT_ORDER_ID",
        using: "BTREE",
        fields: [
          { name: "ext_order_id" },
        ]
      },
      {
        name: "SALES_ORDER_QUOTE_ID",
        using: "BTREE",
        fields: [
          { name: "quote_id" },
        ]
      },
      {
        name: "SALES_ORDER_UPDATED_AT",
        using: "BTREE",
        fields: [
          { name: "updated_at" },
        ]
      },
      {
        name: "SALES_ORDER_SEND_EMAIL",
        using: "BTREE",
        fields: [
          { name: "send_email" },
        ]
      },
      {
        name: "SALES_ORDER_EMAIL_SENT",
        using: "BTREE",
        fields: [
          { name: "email_sent" },
        ]
      },
    ]
  });
};
