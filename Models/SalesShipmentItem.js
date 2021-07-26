const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesShipmentItem', {
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
        model: 'sales_shipment',
        key: 'entity_id'
      }
    },
    row_total: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Row Total"
    },
    price: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Price"
    },
    weight: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Weight"
    },
    qty: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Qty"
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Product ID"
    },
    order_item_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Order Item ID"
    },
    additional_data: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Additional Data"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Description"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Name"
    },
    sku: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Sku"
    }
  }, {
    sequelize,
    tableName: 'sales_shipment_item',
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
        name: "SALES_SHIPMENT_ITEM_PARENT_ID",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
    ]
  });
};
