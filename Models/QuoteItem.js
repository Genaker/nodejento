const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QuoteItem', {
    item_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Item ID"
    },
    quote_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Quote ID",
      references: {
        model: 'quote',
        key: 'entity_id'
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
    product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Product ID"
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
    parent_item_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Parent Item ID",
      references: {
        model: 'quote_item',
        key: 'item_id'
      }
    },
    is_virtual: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Is Virtual"
    },
    sku: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Sku"
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
    is_qty_decimal: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Is Qty Decimal"
    },
    no_discount: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "No Discount"
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
    price: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Price"
    },
    base_price: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Base Price"
    },
    custom_price: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Custom Price"
    },
    discount_percent: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Discount Percent"
    },
    discount_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Discount Amount"
    },
    base_discount_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Base Discount Amount"
    },
    tax_percent: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Tax Percent"
    },
    tax_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Tax Amount"
    },
    base_tax_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Base Tax Amount"
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
    row_weight: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Row Weight"
    },
    product_type: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Product Type"
    },
    base_tax_before_discount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Tax Before Discount"
    },
    tax_before_discount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Tax Before Discount"
    },
    original_custom_price: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Original Custom Price"
    },
    redirect_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Redirect Url"
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
    weee_tax_applied: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Weee Tax Applied"
    },
    weee_tax_applied_amount: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Weee Tax Applied Amount"
    },
    weee_tax_applied_row_amount: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Weee Tax Applied Row Amount"
    },
    weee_tax_disposition: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Weee Tax Disposition"
    },
    weee_tax_row_disposition: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Weee Tax Row Disposition"
    },
    base_weee_tax_applied_amount: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Base Weee Tax Applied Amount"
    },
    base_weee_tax_applied_row_amnt: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Base Weee Tax Applied Row Amnt"
    },
    base_weee_tax_disposition: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Base Weee Tax Disposition"
    },
    base_weee_tax_row_disposition: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Base Weee Tax Row Disposition"
    },
    free_shipping: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Free Shipping"
    }
  }, {
    sequelize,
    tableName: 'quote_item',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "item_id" },
        ]
      },
      {
        name: "QUOTE_ITEM_PARENT_ITEM_ID",
        using: "BTREE",
        fields: [
          { name: "parent_item_id" },
        ]
      },
      {
        name: "QUOTE_ITEM_PRODUCT_ID",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "QUOTE_ITEM_QUOTE_ID",
        using: "BTREE",
        fields: [
          { name: "quote_id" },
        ]
      },
      {
        name: "QUOTE_ITEM_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
