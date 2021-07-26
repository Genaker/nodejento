const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesInvoiceGrid', {
    entity_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    increment_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Increment ID"
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "State"
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Store ID"
    },
    store_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Store Name"
    },
    order_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Order ID"
    },
    order_increment_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Order Increment ID"
    },
    order_created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Order Created At"
    },
    customer_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Customer Name"
    },
    customer_email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Customer Email"
    },
    customer_group_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    payment_method: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: "Payment Method"
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
    billing_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Billing Name"
    },
    billing_address: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Billing Address"
    },
    shipping_address: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Shipping Address"
    },
    shipping_information: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Shipping Method Name"
    },
    subtotal: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Subtotal"
    },
    shipping_and_handling: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Shipping and handling amount"
    },
    grand_total: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Grand Total"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Created At"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Updated At"
    },
    base_grand_total: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Grand Total"
    }
  }, {
    sequelize,
    tableName: 'sales_invoice_grid',
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
        name: "SALES_INVOICE_GRID_INCREMENT_ID_STORE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "increment_id" },
          { name: "store_id" },
        ]
      },
      {
        name: "SALES_INVOICE_GRID_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
      {
        name: "SALES_INVOICE_GRID_GRAND_TOTAL",
        using: "BTREE",
        fields: [
          { name: "grand_total" },
        ]
      },
      {
        name: "SALES_INVOICE_GRID_ORDER_ID",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "SALES_INVOICE_GRID_STATE",
        using: "BTREE",
        fields: [
          { name: "state" },
        ]
      },
      {
        name: "SALES_INVOICE_GRID_ORDER_INCREMENT_ID",
        using: "BTREE",
        fields: [
          { name: "order_increment_id" },
        ]
      },
      {
        name: "SALES_INVOICE_GRID_CREATED_AT",
        using: "BTREE",
        fields: [
          { name: "created_at" },
        ]
      },
      {
        name: "SALES_INVOICE_GRID_UPDATED_AT",
        using: "BTREE",
        fields: [
          { name: "updated_at" },
        ]
      },
      {
        name: "SALES_INVOICE_GRID_ORDER_CREATED_AT",
        using: "BTREE",
        fields: [
          { name: "order_created_at" },
        ]
      },
      {
        name: "SALES_INVOICE_GRID_BILLING_NAME",
        using: "BTREE",
        fields: [
          { name: "billing_name" },
        ]
      },
      {
        name: "SALES_INVOICE_GRID_BASE_GRAND_TOTAL",
        using: "BTREE",
        fields: [
          { name: "base_grand_total" },
        ]
      },
      {
        name: "FTI_95D9C924DD6A8734EB8B5D01D60F90DE",
        type: "FULLTEXT",
        fields: [
          { name: "increment_id" },
          { name: "order_increment_id" },
          { name: "billing_name" },
          { name: "billing_address" },
          { name: "shipping_address" },
          { name: "customer_name" },
          { name: "customer_email" },
        ]
      },
    ]
  });
};
