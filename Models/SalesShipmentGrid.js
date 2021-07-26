const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesShipmentGrid', {
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
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Store ID"
    },
    order_increment_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "Order Increment ID"
    },
    order_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Order ID"
    },
    order_created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Order Increment ID"
    },
    customer_name: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: "Customer Name"
    },
    total_qty: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Total Qty"
    },
    shipment_status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Shipment Status"
    },
    order_status: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Order"
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
    billing_name: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: "Billing Name"
    },
    shipping_name: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: "Shipping Name"
    },
    customer_email: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: "Customer Email"
    },
    customer_group_id: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Created At"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Updated At"
    }
  }, {
    sequelize,
    tableName: 'sales_shipment_grid',
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
        name: "SALES_SHIPMENT_GRID_INCREMENT_ID_STORE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "increment_id" },
          { name: "store_id" },
        ]
      },
      {
        name: "SALES_SHIPMENT_GRID_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
      {
        name: "SALES_SHIPMENT_GRID_TOTAL_QTY",
        using: "BTREE",
        fields: [
          { name: "total_qty" },
        ]
      },
      {
        name: "SALES_SHIPMENT_GRID_ORDER_INCREMENT_ID",
        using: "BTREE",
        fields: [
          { name: "order_increment_id" },
        ]
      },
      {
        name: "SALES_SHIPMENT_GRID_SHIPMENT_STATUS",
        using: "BTREE",
        fields: [
          { name: "shipment_status" },
        ]
      },
      {
        name: "SALES_SHIPMENT_GRID_ORDER_STATUS",
        using: "BTREE",
        fields: [
          { name: "order_status" },
        ]
      },
      {
        name: "SALES_SHIPMENT_GRID_CREATED_AT",
        using: "BTREE",
        fields: [
          { name: "created_at" },
        ]
      },
      {
        name: "SALES_SHIPMENT_GRID_UPDATED_AT",
        using: "BTREE",
        fields: [
          { name: "updated_at" },
        ]
      },
      {
        name: "SALES_SHIPMENT_GRID_ORDER_CREATED_AT",
        using: "BTREE",
        fields: [
          { name: "order_created_at" },
        ]
      },
      {
        name: "SALES_SHIPMENT_GRID_SHIPPING_NAME",
        using: "BTREE",
        fields: [
          { name: "shipping_name" },
        ]
      },
      {
        name: "SALES_SHIPMENT_GRID_BILLING_NAME",
        using: "BTREE",
        fields: [
          { name: "billing_name" },
        ]
      },
      {
        name: "SALES_SHIPMENT_GRID_ORDER_ID",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "FTI_086B40C8955F167B8EA76653437879B4",
        type: "FULLTEXT",
        fields: [
          { name: "increment_id" },
          { name: "order_increment_id" },
          { name: "shipping_name" },
          { name: "customer_name" },
          { name: "customer_email" },
          { name: "billing_address" },
          { name: "shipping_address" },
        ]
      },
    ]
  });
};
