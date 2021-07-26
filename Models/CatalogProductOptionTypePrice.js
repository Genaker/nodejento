const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductOptionTypePrice', {
    option_type_price_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Option Type Price ID"
    },
    option_type_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Option Type ID",
      references: {
        model: 'catalog_product_option_type_value',
        key: 'option_type_id'
      }
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
      }
    },
    price: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false,
      defaultValue: 0.000000,
      comment: "Price"
    },
    price_type: {
      type: DataTypes.STRING(7),
      allowNull: false,
      defaultValue: "fixed",
      comment: "Price Type"
    }
  }, {
    sequelize,
    tableName: 'catalog_product_option_type_price',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "option_type_price_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_OPTION_TYPE_PRICE_OPTION_TYPE_ID_STORE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "option_type_id" },
          { name: "store_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_OPTION_TYPE_PRICE_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
