const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductOptionTypeTitle', {
    option_type_title_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Option Type Title ID"
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
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Title"
    }
  }, {
    sequelize,
    tableName: 'catalog_product_option_type_title',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "option_type_title_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_OPTION_TYPE_TITLE_OPTION_TYPE_ID_STORE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "option_type_id" },
          { name: "store_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_OPTION_TYPE_TITLE_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
