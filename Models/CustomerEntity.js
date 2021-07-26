const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CustomerEntity', {
    entity_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    website_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Website ID",
      references: {
        model: 'store_website',
        key: 'website_id'
      }
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Email"
    },
    group_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Group ID"
    },
    increment_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Increment ID"
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
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
    is_active: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "Is Active"
    },
    disable_auto_group_change: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Disable automatic group change based on VAT ID"
    },
    created_in: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Created From"
    },
    prefix: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "Name Prefix"
    },
    firstname: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "First Name"
    },
    middlename: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Middle Name\/Initial"
    },
    lastname: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Last Name"
    },
    suffix: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "Name Suffix"
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Date of Birth"
    },
    password_hash: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: "Password_hash"
    },
    rp_token: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: "Reset password token"
    },
    rp_token_created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Reset password token creation time"
    },
    default_billing: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Default Billing Address"
    },
    default_shipping: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Default Shipping Address"
    },
    taxvat: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Tax\/VAT Number"
    },
    confirmation: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "Is Confirmed"
    },
    gender: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Gender"
    },
    failures_num: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      comment: "Failure Number"
    },
    first_failure: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "First Failure"
    },
    lock_expires: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Lock Expiration Date"
    }
  }, {
    sequelize,
    tableName: 'customer_entity',
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
        name: "CUSTOMER_ENTITY_EMAIL_WEBSITE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
          { name: "website_id" },
        ]
      },
      {
        name: "CUSTOMER_ENTITY_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
      {
        name: "CUSTOMER_ENTITY_WEBSITE_ID",
        using: "BTREE",
        fields: [
          { name: "website_id" },
        ]
      },
      {
        name: "CUSTOMER_ENTITY_FIRSTNAME",
        using: "BTREE",
        fields: [
          { name: "firstname" },
        ]
      },
      {
        name: "CUSTOMER_ENTITY_LASTNAME",
        using: "BTREE",
        fields: [
          { name: "lastname" },
        ]
      },
    ]
  });
};
