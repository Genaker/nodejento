const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ShippingTablerate', {
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Primary key"
    },
    website_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Website ID"
    },
    dest_country_id: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "0",
      comment: "Destination coutry ISO\/2 or ISO\/3 code"
    },
    dest_region_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Destination Region ID"
    },
    dest_zip: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "*",
      comment: "Destination Post Code (Zip)"
    },
    condition_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "Rate Condition name"
    },
    condition_value: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Rate condition value"
    },
    price: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Price"
    },
    cost: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Cost"
    }
  }, {
    sequelize,
    tableName: 'shipping_tablerate',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pk" },
        ]
      },
      {
        name: "UNQ_D60821CDB2AFACEE1566CFC02D0D4CAA",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "website_id" },
          { name: "dest_country_id" },
          { name: "dest_region_id" },
          { name: "dest_zip" },
          { name: "condition_name" },
          { name: "condition_value" },
        ]
      },
    ]
  });
};
