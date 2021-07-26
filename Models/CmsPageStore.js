const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CmsPageStore', {
    page_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID",
      references: {
        model: 'cms_page',
        key: 'page_id'
      }
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
      }
    }
  }, {
    sequelize,
    tableName: 'cms_page_store',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "page_id" },
          { name: "store_id" },
        ]
      },
      {
        name: "CMS_PAGE_STORE_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
