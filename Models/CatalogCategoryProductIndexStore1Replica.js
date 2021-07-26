const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogCategoryProductIndexStore1Replica', {
    category_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "Category Id"
    },
    product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "Product Id"
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Position"
    },
    is_parent: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Parent"
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "Store Id"
    },
    visibility: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      comment: "Visibility"
    }
  }, {
    sequelize,
    tableName: 'catalog_category_product_index_store1_replica',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "category_id" },
          { name: "product_id" },
          { name: "store_id" },
        ]
      },
      {
        name: "IDX_4B965DC45C352D6E4C9DC0FF50B1FCF5",
        using: "BTREE",
        fields: [
          { name: "product_id" },
          { name: "store_id" },
          { name: "category_id" },
          { name: "visibility" },
        ]
      },
      {
        name: "IDX_47AB760CD6A893ACEA69A9C2E0112C60",
        using: "BTREE",
        fields: [
          { name: "store_id" },
          { name: "category_id" },
          { name: "visibility" },
          { name: "is_parent" },
          { name: "position" },
        ]
      },
    ]
  });
};
