const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogUrlRewriteProductCategory', {
    url_rewrite_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "url_rewrite_id",
      references: {
        model: 'url_rewrite',
        key: 'url_rewrite_id'
      }
    },
    category_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "category_id",
      references: {
        model: 'catalog_category_entity',
        key: 'entity_id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "product_id",
      references: {
        model: 'catalog_product_entity',
        key: 'entity_id'
      }
    }
  }, {
    sequelize,
    tableName: 'catalog_url_rewrite_product_category',
    timestamps: false,
    indexes: [
      {
        name: "CAT_URL_REWRITE_PRD_CTGR_PRD_ID_CAT_PRD_ENTT_ENTT_ID",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "FK_BB79E64705D7F17FE181F23144528FC8",
        using: "BTREE",
        fields: [
          { name: "url_rewrite_id" },
        ]
      },
      {
        name: "CATALOG_URL_REWRITE_PRODUCT_CATEGORY_CATEGORY_ID_PRODUCT_ID",
        using: "BTREE",
        fields: [
          { name: "category_id" },
          { name: "product_id" },
        ]
      },
    ]
  });
};
