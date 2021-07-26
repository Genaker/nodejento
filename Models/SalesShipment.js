const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesShipment', {
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
    total_weight: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Total Weight"
    },
    total_qty: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Total Qty"
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
    order_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Order ID",
      references: {
        model: 'sales_order',
        key: 'entity_id'
      }
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Customer ID"
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
    shipment_status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Shipment Status"
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
    packages: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Packed Products in Packages"
    },
    shipping_label: {
      type: DataTypes.BLOB,
      allowNull: true,
      comment: "Shipping Label Content"
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
    tableName: 'sales_shipment',
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
        name: "SALES_SHIPMENT_INCREMENT_ID_STORE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "increment_id" },
          { name: "store_id" },
        ]
      },
      {
        name: "SALES_SHIPMENT_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
      {
        name: "SALES_SHIPMENT_TOTAL_QTY",
        using: "BTREE",
        fields: [
          { name: "total_qty" },
        ]
      },
      {
        name: "SALES_SHIPMENT_ORDER_ID",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "SALES_SHIPMENT_CREATED_AT",
        using: "BTREE",
        fields: [
          { name: "created_at" },
        ]
      },
      {
        name: "SALES_SHIPMENT_UPDATED_AT",
        using: "BTREE",
        fields: [
          { name: "updated_at" },
        ]
      },
      {
        name: "SALES_SHIPMENT_SEND_EMAIL",
        using: "BTREE",
        fields: [
          { name: "send_email" },
        ]
      },
      {
        name: "SALES_SHIPMENT_EMAIL_SENT",
        using: "BTREE",
        fields: [
          { name: "email_sent" },
        ]
      },
    ]
  });
};
