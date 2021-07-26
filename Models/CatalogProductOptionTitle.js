const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductOptionTitle', {
    option_title_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Option Title ID"
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
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Title"
    }
  }, {
    sequelize,
    tableName: 'catalog_product_option_title',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "option_title_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_OPTION_TITLE_OPTION_ID_STORE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "option_id" },
          { name: "store_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_OPTION_TITLE_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
