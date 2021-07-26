const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesOrderGrid', {
    entity_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    status: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Status"
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
    customer_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Customer ID"
    },
    base_grand_total: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Grand Total"
    },
    base_total_paid: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Total Paid"
    },
    grand_total: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Grand Total"
    },
    total_paid: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Total Paid"
    },
    increment_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Increment ID"
    },
    base_currency_code: {
      type: DataTypes.STRING(3),
      allowNull: true,
      comment: "Base Currency Code"
    },
    order_currency_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Order Currency Code"
    },
    shipping_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Shipping Name"
    },
    billing_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Billing Name"
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
    customer_email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Customer Email"
    },
    customer_group: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Customer Group"
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
    customer_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Customer Name"
    },
    payment_method: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Payment Method"
    },
    total_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Total Refunded"
    }
  }, {
    sequelize,
    tableName: 'sales_order_grid',
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
        name: "SALES_ORDER_GRID_INCREMENT_ID_STORE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "increment_id" },
          { name: "store_id" },
        ]
      },
      {
        name: "SALES_ORDER_GRID_STATUS",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
      {
        name: "SALES_ORDER_GRID_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
      {
        name: "SALES_ORDER_GRID_BASE_GRAND_TOTAL",
        using: "BTREE",
        fields: [
          { name: "base_grand_total" },
        ]
      },
      {
        name: "SALES_ORDER_GRID_BASE_TOTAL_PAID",
        using: "BTREE",
        fields: [
          { name: "base_total_paid" },
        ]
      },
      {
        name: "SALES_ORDER_GRID_GRAND_TOTAL",
        using: "BTREE",
        fields: [
          { name: "grand_total" },
        ]
      },
      {
        name: "SALES_ORDER_GRID_TOTAL_PAID",
        using: "BTREE",
        fields: [
          { name: "total_paid" },
        ]
      },
      {
        name: "SALES_ORDER_GRID_SHIPPING_NAME",
        using: "BTREE",
        fields: [
          { name: "shipping_name" },
        ]
      },
      {
        name: "SALES_ORDER_GRID_BILLING_NAME",
        using: "BTREE",
        fields: [
          { name: "billing_name" },
        ]
      },
      {
        name: "SALES_ORDER_GRID_CREATED_AT",
        using: "BTREE",
        fields: [
          { name: "created_at" },
        ]
      },
      {
        name: "SALES_ORDER_GRID_CUSTOMER_ID",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "SALES_ORDER_GRID_UPDATED_AT",
        using: "BTREE",
        fields: [
          { name: "updated_at" },
        ]
      },
      {
        name: "FTI_65B9E9925EC58F0C7C2E2F6379C233E7",
        type: "FULLTEXT",
        fields: [
          { name: "increment_id" },
          { name: "billing_name" },
          { name: "shipping_name" },
          { name: "shipping_address" },
          { name: "billing_address" },
          { name: "customer_name" },
          { name: "customer_email" },
        ]
      },
    ]
  });
};
