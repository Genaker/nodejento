const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QuoteAddressItem', {
    address_item_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Address Item ID"
    },
    parent_item_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Parent Item ID",
      references: {
        model: 'quote_address_item',
        key: 'address_item_id'
      }
    },
    quote_address_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Quote Address ID",
      references: {
        model: 'quote_address',
        key: 'address_id'
      }
    },
    quote_item_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Quote Item ID",
      references: {
        model: 'quote_item',
        key: 'item_id'
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
    applied_rule_ids: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Applied Rule Ids"
    },
    additional_data: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Additional Data"
    },
    weight: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Weight"
    },
    qty: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Qty"
    },
    discount_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Discount Amount"
    },
    tax_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Tax Amount"
    },
    row_total: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Row Total"
    },
    base_row_total: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Base Row Total"
    },
    row_total_with_discount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Row Total With Discount"
    },
    base_discount_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Base Discount Amount"
    },
    base_tax_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Base Tax Amount"
    },
    row_weight: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Row Weight"
    },
    product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Product ID"
    },
    super_product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Super Product ID"
    },
    parent_product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Parent Product ID"
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Store ID"
    },
    sku: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Sku"
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Image"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Name"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Description"
    },
    is_qty_decimal: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Is Qty Decimal"
    },
    price: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Price"
    },
    discount_percent: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Discount Percent"
    },
    no_discount: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "No Discount"
    },
    tax_percent: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Tax Percent"
    },
    base_price: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Base Price"
    },
    base_cost: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Base Cost"
    },
    price_incl_tax: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Price Incl Tax"
    },
    base_price_incl_tax: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Price Incl Tax"
    },
    row_total_incl_tax: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Row Total Incl Tax"
    },
    base_row_total_incl_tax: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Row Total Incl Tax"
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
    gift_message_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Gift Message ID"
    },
    free_shipping: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Free Shipping"
    }
  }, {
    sequelize,
    tableName: 'quote_address_item',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "address_item_id" },
        ]
      },
      {
        name: "QUOTE_ADDRESS_ITEM_QUOTE_ADDRESS_ID",
        using: "BTREE",
        fields: [
          { name: "quote_address_id" },
        ]
      },
      {
        name: "QUOTE_ADDRESS_ITEM_PARENT_ITEM_ID",
        using: "BTREE",
        fields: [
          { name: "parent_item_id" },
        ]
      },
      {
        name: "QUOTE_ADDRESS_ITEM_QUOTE_ITEM_ID",
        using: "BTREE",
        fields: [
          { name: "quote_item_id" },
        ]
      },
      {
        name: "QUOTE_ADDRESS_ITEM_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
