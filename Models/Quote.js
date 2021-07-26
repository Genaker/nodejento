const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Quote', {
    entity_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
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
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    converted_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Converted At"
    },
    is_active: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 1,
      comment: "Is Active"
    },
    is_virtual: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "Is Virtual"
    },
    is_multi_shipping: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "Is Multi Shipping"
    },
    items_count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "Items Count"
    },
    items_qty: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Items Qty"
    },
    orig_order_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "Orig Order ID"
    },
    store_to_base_rate: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Store To Base Rate"
    },
    store_to_quote_rate: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Store To Quote Rate"
    },
    base_currency_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Base Currency Code"
    },
    store_currency_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Store Currency Code"
    },
    quote_currency_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Quote Currency Code"
    },
    grand_total: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Grand Total"
    },
    base_grand_total: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Base Grand Total"
    },
    checkout_method: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Checkout Method"
    },
    customer_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Customer ID"
    },
    customer_tax_class_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Customer Tax Class ID"
    },
    customer_group_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "Customer Group ID"
    },
    customer_email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Customer Email"
    },
    customer_prefix: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "Customer Prefix"
    },
    customer_firstname: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Customer Firstname"
    },
    customer_middlename: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "Customer Middlename"
    },
    customer_lastname: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Customer Lastname"
    },
    customer_suffix: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "Customer Suffix"
    },
    customer_dob: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Customer Dob"
    },
    customer_note: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Customer Note"
    },
    customer_note_notify: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 1,
      comment: "Customer Note Notify"
    },
    customer_is_guest: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "Customer Is Guest"
    },
    remote_ip: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "Remote Ip"
    },
    applied_rule_ids: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Applied Rule Ids"
    },
    reserved_order_id: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "Reserved Order ID"
    },
    password_hash: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Password Hash"
    },
    coupon_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Coupon Code"
    },
    global_currency_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Global Currency Code"
    },
    base_to_global_rate: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base To Global Rate"
    },
    base_to_quote_rate: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base To Quote Rate"
    },
    customer_taxvat: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Customer Taxvat"
    },
    customer_gender: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Customer Gender"
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
    subtotal_with_discount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Subtotal With Discount"
    },
    base_subtotal_with_discount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Subtotal With Discount"
    },
    is_changed: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Is Changed"
    },
    trigger_recollect: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Trigger Recollect"
    },
    ext_shipping_info: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Ext Shipping Info"
    },
    gift_message_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Gift Message ID"
    },
    is_persistent: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "Is Quote Persistent"
    }
  }, {
    sequelize,
    tableName: 'quote',
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
        name: "QUOTE_CUSTOMER_ID_STORE_ID_IS_ACTIVE",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
          { name: "store_id" },
          { name: "is_active" },
        ]
      },
      {
        name: "QUOTE_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
