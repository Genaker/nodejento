const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogCategoryProductIndexTmp', {
    category_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "Category ID"
    },
    product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "Product ID"
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
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
      comment: "Store ID"
    },
    visibility: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      comment: "Visibility"
    }
  }, {
    sequelize,
    tableName: 'catalog_category_product_index_tmp',
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
        name: "CAT_CTGR_PRD_IDX_TMP_PRD_ID_CTGR_ID_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "product_id" },
          { name: "category_id" },
          { name: "store_id" },
        ]
      },
    ]
  });
};
