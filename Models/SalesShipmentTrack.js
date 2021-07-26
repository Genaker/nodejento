const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesShipmentTrack', {
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
    order_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Order ID"
    },
    track_number: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Number"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Description"
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Title"
    },
    carrier_code: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Carrier Code"
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
    }
  }, {
    sequelize,
    tableName: 'sales_shipment_track',
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
        name: "SALES_SHIPMENT_TRACK_PARENT_ID",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
      {
        name: "SALES_SHIPMENT_TRACK_ORDER_ID",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "SALES_SHIPMENT_TRACK_CREATED_AT",
        using: "BTREE",
        fields: [
          { name: "created_at" },
        ]
      },
    ]
  });
};
