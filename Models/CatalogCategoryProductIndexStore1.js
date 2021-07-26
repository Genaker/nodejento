const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogCategoryProductIndexStore1', {
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
    tableName: 'catalog_category_product_index_store1',
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
        name: "CAT_CTGR_PRD_IDX_STORE1_PRD_ID_STORE_ID_CTGR_ID_VISIBILITY",
        using: "BTREE",
        fields: [
          { name: "product_id" },
          { name: "store_id" },
          { name: "category_id" },
          { name: "visibility" },
        ]
      },
      {
        name: "IDX_216E521C8AD125E066D2B0BAB4A08412",
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
