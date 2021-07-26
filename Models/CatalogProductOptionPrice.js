const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductOptionPrice', {
    option_price_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Option Price ID"
    },
    option_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Option ID",
      references: {
        model: 'catalog_product_option',
        key: 'option_id'
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
    tableName: 'catalog_product_option_price',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "option_price_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_OPTION_PRICE_OPTION_ID_STORE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "option_id" },
          { name: "store_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_OPTION_PRICE_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
