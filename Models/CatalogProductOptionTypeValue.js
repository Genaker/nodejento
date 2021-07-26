const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductOptionTypeValue', {
    option_type_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Option Type ID"
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
    sku: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "SKU"
    },
    sort_order: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Sort Order"
    }
  }, {
    sequelize,
    tableName: 'catalog_product_option_type_value',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "option_type_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_OPTION_TYPE_VALUE_OPTION_ID",
        using: "BTREE",
        fields: [
          { name: "option_id" },
        ]
      },
    ]
  });
};
