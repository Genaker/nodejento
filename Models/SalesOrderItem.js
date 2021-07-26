const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesOrderItem', {
    item_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Item ID"
    },
    order_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Order ID",
      references: {
        model: 'sales_order',
        key: 'entity_id'
      }
    },
    parent_item_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Parent Item ID"
    },
    quote_item_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Quote Item ID"
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
    product_type: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Product Type"
    },
    product_options: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Product Options"
    },
    weight: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Weight"
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
      allowNull: false,
      defaultValue: 0,
      comment: "No Discount"
    },
    qty_backordered: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Qty Backordered"
    },
    qty_canceled: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Qty Canceled"
    },
    qty_invoiced: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Qty Invoiced"
    },
    qty_ordered: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Qty Ordered"
    },
    qty_refunded: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Qty Refunded"
    },
    qty_shipped: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Qty Shipped"
    },
    base_cost: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Base Cost"
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
    original_price: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Original Price"
    },
    base_original_price: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Base Original Price"
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
    tax_invoiced: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Tax Invoiced"
    },
    base_tax_invoiced: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Base Tax Invoiced"
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
    discount_invoiced: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Discount Invoiced"
    },
    base_discount_invoiced: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Base Discount Invoiced"
    },
    amount_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Amount Refunded"
    },
    base_amount_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Base Amount Refunded"
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
    row_invoiced: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Row Invoiced"
    },
    base_row_invoiced: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Base Row Invoiced"
    },
    row_weight: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      defaultValue: 0.0000,
      comment: "Row Weight"
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
    ext_order_item_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Ext Order Item ID"
    },
    locked_do_invoice: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Locked Do Invoice"
    },
    locked_do_ship: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Locked Do Ship"
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
    discount_tax_compensation_invoiced: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Discount Tax Compensation Invoiced"
    },
    base_discount_tax_compensation_invoiced: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Discount Tax Compensation Invoiced"
    },
    discount_tax_compensation_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Discount Tax Compensation Refunded"
    },
    base_discount_tax_compensation_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Discount Tax Compensation Refunded"
    },
    tax_canceled: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Tax Canceled"
    },
    discount_tax_compensation_canceled: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Discount Tax Compensation Canceled"
    },
    tax_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Tax Refunded"
    },
    base_tax_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Tax Refunded"
    },
    discount_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Discount Refunded"
    },
    base_discount_refunded: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Discount Refunded"
    },
    gift_message_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Gift Message ID"
    },
    gift_message_available: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Gift Message Available"
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
    tableName: 'sales_order_item',
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
        name: "SALES_ORDER_ITEM_ORDER_ID",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "SALES_ORDER_ITEM_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
