const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CustomerAddressEntity', {
    entity_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    increment_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Increment ID"
    },
    parent_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Parent ID",
      references: {
        model: 'customer_entity',
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
    is_active: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "Is Active"
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "City"
    },
    company: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Company"
    },
    country_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Country"
    },
    fax: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Fax"
    },
    firstname: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "First Name"
    },
    lastname: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Last Name"
    },
    middlename: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Middle Name"
    },
    postcode: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Zip\/Postal Code"
    },
    prefix: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "Name Prefix"
    },
    region: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "State\/Province"
    },
    region_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "State\/Province"
    },
    street: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "Street Address"
    },
    suffix: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "Name Suffix"
    },
    telephone: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Phone Number"
    },
    vat_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "VAT number"
    },
    vat_is_valid: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "VAT number validity"
    },
    vat_request_date: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "VAT number validation request date"
    },
    vat_request_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "VAT number validation request ID"
    },
    vat_request_success: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "VAT number validation request success"
    }
  }, {
    sequelize,
    tableName: 'customer_address_entity',
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
        name: "CUSTOMER_ADDRESS_ENTITY_PARENT_ID",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
    ]
  });
};
