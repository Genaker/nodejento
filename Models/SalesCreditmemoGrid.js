const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesCreditmemoGrid', {
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
    billing_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Billing Name"
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Status"
    },
    base_grand_total: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Grand Total"
    },
    order_status: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Order Status"
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Store ID"
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
    customer_name: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: "Customer Name"
    },
    customer_email: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: "Customer Email"
    },
    customer_group_id: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "Customer Group ID"
    },
    payment_method: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Payment Method"
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
    adjustment_positive: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Adjustment Positive"
    },
    adjustment_negative: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Adjustment Negative"
    },
    order_base_grand_total: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Order Grand Total"
    }
  }, {
    sequelize,
    tableName: 'sales_creditmemo_grid',
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
        name: "SALES_CREDITMEMO_GRID_INCREMENT_ID_STORE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "increment_id" },
          { name: "store_id" },
        ]
      },
      {
        name: "SALES_CREDITMEMO_GRID_ORDER_INCREMENT_ID",
        using: "BTREE",
        fields: [
          { name: "order_increment_id" },
        ]
      },
      {
        name: "SALES_CREDITMEMO_GRID_CREATED_AT",
        using: "BTREE",
        fields: [
          { name: "created_at" },
        ]
      },
      {
        name: "SALES_CREDITMEMO_GRID_UPDATED_AT",
        using: "BTREE",
        fields: [
          { name: "updated_at" },
        ]
      },
      {
        name: "SALES_CREDITMEMO_GRID_ORDER_CREATED_AT",
        using: "BTREE",
        fields: [
          { name: "order_created_at" },
        ]
      },
      {
        name: "SALES_CREDITMEMO_GRID_STATE",
        using: "BTREE",
        fields: [
          { name: "state" },
        ]
      },
      {
        name: "SALES_CREDITMEMO_GRID_BILLING_NAME",
        using: "BTREE",
        fields: [
          { name: "billing_name" },
        ]
      },
      {
        name: "SALES_CREDITMEMO_GRID_ORDER_STATUS",
        using: "BTREE",
        fields: [
          { name: "order_status" },
        ]
      },
      {
        name: "SALES_CREDITMEMO_GRID_BASE_GRAND_TOTAL",
        using: "BTREE",
        fields: [
          { name: "base_grand_total" },
        ]
      },
      {
        name: "SALES_CREDITMEMO_GRID_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
      {
        name: "SALES_CREDITMEMO_GRID_ORDER_BASE_GRAND_TOTAL",
        using: "BTREE",
        fields: [
          { name: "order_base_grand_total" },
        ]
      },
      {
        name: "SALES_CREDITMEMO_GRID_ORDER_ID",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "FTI_32B7BA885941A8254EE84AE650ABDC86",
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
