const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesOrderAddress', {
    entity_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    parent_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Parent ID",
      references: {
        model: 'sales_order',
        key: 'entity_id'
      }
    },
    customer_address_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Customer Address ID"
    },
    quote_address_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Quote Address ID"
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Region ID"
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Customer ID"
    },
    fax: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Fax"
    },
    region: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Region"
    },
    postcode: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Postcode"
    },
    lastname: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Lastname"
    },
    street: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Street"
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "City"
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Email"
    },
    telephone: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Phone Number"
    },
    country_id: {
      type: DataTypes.STRING(2),
      allowNull: true,
      comment: "Country ID"
    },
    firstname: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Firstname"
    },
    address_type: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Address Type"
    },
    prefix: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Prefix"
    },
    middlename: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Middlename"
    },
    suffix: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Suffix"
    },
    company: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Company"
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
    }
  }, {
    sequelize,
    tableName: 'sales_order_address',
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
        name: "SALES_ORDER_ADDRESS_PARENT_ID",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
    ]
  });
};
