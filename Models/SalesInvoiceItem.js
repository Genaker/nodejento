const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesInvoiceItem', {
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
        model: 'sales_invoice',
        key: 'entity_id'
      }
    },
    base_price: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Base Price"
    },
    tax_amount: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Tax Amount"
    },
    base_row_total: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Row Total"
    },
    discount_amount: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Discount Amount"
    },
    row_total: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Row Total"
    },
    base_discount_amount: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Base Discount Amount"
    },
    price_incl_tax: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Price Incl Tax"
    },
    base_tax_amount: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Base Tax Amount"
    },
    base_price_incl_tax: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Base Price Incl Tax"
    },
    qty: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Qty"
    },
    base_cost: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Base Cost"
    },
    price: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Price"
    },
    base_row_total_incl_tax: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Base Row Total Incl Tax"
    },
    row_total_incl_tax: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Row Total Incl Tax"
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
    discount_tax_compensation_amount: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Discount Tax Compensation Amount"
    },
    base_discount_tax_compensation_amount: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Base Discount Tax Compensation Amount"
    },
    tax_ratio: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Ratio of tax invoiced over tax of the order item"
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
    }
  }, {
    sequelize,
    tableName: 'sales_invoice_item',
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
        name: "SALES_INVOICE_ITEM_PARENT_ID",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
    ]
  });
};
