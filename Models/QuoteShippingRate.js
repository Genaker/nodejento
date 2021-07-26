const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QuoteShippingRate', {
    rate_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Rate ID"
    },
    address_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Address ID",
      references: {
        model: 'quote_address',
        key: 'address_id'
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
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Updated At"
    },
    carrier: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Carrier"
    },
    carrier_title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Carrier Title"
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Code"
    },
    method: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Method"
    },
    method_description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Method Description"
    },
    price: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Price"
    },
    error_message: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Error Message"
    },
    method_title: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Method Title"
    }
  }, {
    sequelize,
    tableName: 'quote_shipping_rate',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rate_id" },
        ]
      },
      {
        name: "QUOTE_SHIPPING_RATE_ADDRESS_ID",
        using: "BTREE",
        fields: [
          { name: "address_id" },
        ]
      },
    ]
  });
};
