const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CustomerGridFlat', {
    entity_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Name"
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Email"
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Group_id"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Created_at"
    },
    website_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Website_id"
    },
    confirmation: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Confirmation"
    },
    created_in: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Created_in"
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Dob"
    },
    gender: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Gender"
    },
    taxvat: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Taxvat"
    },
    lock_expires: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Lock_expires"
    },
    shipping_full: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Shipping_full"
    },
    billing_full: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Billing_full"
    },
    billing_firstname: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Billing_firstname"
    },
    billing_lastname: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Billing_lastname"
    },
    billing_telephone: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Billing_telephone"
    },
    billing_postcode: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Billing_postcode"
    },
    billing_country_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Billing_country_id"
    },
    billing_region: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Billing_region"
    },
    billing_region_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Billing_region_id"
    },
    billing_street: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Billing_street"
    },
    billing_city: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Billing_city"
    },
    billing_fax: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Billing_fax"
    },
    billing_vat_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Billing_vat_id"
    },
    billing_company: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Billing_company"
    }
  }, {
    sequelize,
    tableName: 'customer_grid_flat',
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
        name: "CUSTOMER_GRID_FLAT_GROUP_ID",
        using: "BTREE",
        fields: [
          { name: "group_id" },
        ]
      },
      {
        name: "CUSTOMER_GRID_FLAT_CREATED_AT",
        using: "BTREE",
        fields: [
          { name: "created_at" },
        ]
      },
      {
        name: "CUSTOMER_GRID_FLAT_WEBSITE_ID",
        using: "BTREE",
        fields: [
          { name: "website_id" },
        ]
      },
      {
        name: "CUSTOMER_GRID_FLAT_CONFIRMATION",
        using: "BTREE",
        fields: [
          { name: "confirmation" },
        ]
      },
      {
        name: "CUSTOMER_GRID_FLAT_DOB",
        using: "BTREE",
        fields: [
          { name: "dob" },
        ]
      },
      {
        name: "CUSTOMER_GRID_FLAT_GENDER",
        using: "BTREE",
        fields: [
          { name: "gender" },
        ]
      },
      {
        name: "CUSTOMER_GRID_FLAT_BILLING_COUNTRY_ID",
        using: "BTREE",
        fields: [
          { name: "billing_country_id" },
        ]
      },
      {
        name: "FTI_8746F705702DD5F6D45B8C7CE7FE9F2F",
        type: "FULLTEXT",
        fields: [
          { name: "name" },
          { name: "email" },
          { name: "created_in" },
          { name: "taxvat" },
          { name: "shipping_full" },
          { name: "billing_full" },
          { name: "billing_firstname" },
          { name: "billing_lastname" },
          { name: "billing_telephone" },
          { name: "billing_postcode" },
          { name: "billing_region" },
          { name: "billing_city" },
          { name: "billing_fax" },
          { name: "billing_company" },
        ]
      },
    ]
  });
};
