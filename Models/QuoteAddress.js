const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QuoteAddress', {
    address_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Address ID"
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
    customer_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Customer ID"
    },
    save_in_address_book: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      comment: "Save In Address Book"
    },
    customer_address_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Customer Address ID"
    },
    address_type: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "Address Type"
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Email"
    },
    prefix: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "Prefix"
    },
    firstname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    middlename: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    lastname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    suffix: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "Suffix"
    },
    company: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Company"
    },
    street: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Street"
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    region: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    region_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Region ID"
    },
    postcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "Postcode"
    },
    country_id: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "Country ID"
    },
    telephone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fax: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    same_as_billing: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Same As Billing"
    },
    collect_shipping_rates: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Collect Shipping Rates"
    },
    shipping_method: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    shipping_description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Shipping Description"
    },
    weight: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Weight"
    },
    subtotal: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Subtotal"
    },
    base_subtotal: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Base Subtotal"
    },
    subtotal_with_discount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Subtotal With Discount"
    },
    base_subtotal_with_discount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Base Subtotal With Discount"
    },
    tax_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Tax Amount"
    },
    base_tax_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Base Tax Amount"
    },
    shipping_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Shipping Amount"
    },
    base_shipping_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Base Shipping Amount"
    },
    shipping_tax_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Shipping Tax Amount"
    },
    base_shipping_tax_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Shipping Tax Amount"
    },
    discount_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Discount Amount"
    },
    base_discount_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Base Discount Amount"
    },
    grand_total: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Grand Total"
    },
    base_grand_total: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Base Grand Total"
    },
    customer_notes: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Customer Notes"
    },
    applied_taxes: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Applied Taxes"
    },
    discount_description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Discount Description"
    },
    shipping_discount_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Shipping Discount Amount"
    },
    base_shipping_discount_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Shipping Discount Amount"
    },
    subtotal_incl_tax: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Subtotal Incl Tax"
    },
    base_subtotal_total_incl_tax: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Subtotal Total Incl Tax"
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
    shipping_discount_tax_compensation_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Shipping Discount Tax Compensation Amount"
    },
    base_shipping_discount_tax_compensation_amnt: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Shipping Discount Tax Compensation Amount"
    },
    shipping_incl_tax: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Shipping Incl Tax"
    },
    base_shipping_incl_tax: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Shipping Incl Tax"
    },
    vat_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Vat ID"
    },
    vat_is_valid: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "Vat Is Valid"
    },
    vat_request_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Vat Request ID"
    },
    vat_request_date: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Vat Request Date"
    },
    vat_request_success: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "Vat Request Success"
    },
    validated_country_code: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Validated Country Code"
    },
    validated_vat_number: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Validated Vat Number"
    },
    gift_message_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Gift Message ID"
    },
    free_shipping: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Free Shipping"
    }
  }, {
    sequelize,
    tableName: 'quote_address',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "address_id" },
        ]
      },
      {
        name: "QUOTE_ADDRESS_QUOTE_ID",
        using: "BTREE",
        fields: [
          { name: "quote_id" },
        ]
      },
    ]
  });
};
