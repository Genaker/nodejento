const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogCategoryProduct', {
    entity_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    category_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "Category ID",
      references: {
        model: 'catalog_category_entity',
        key: 'entity_id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "Product ID",
      references: {
        model: 'catalog_product_entity',
        key: 'entity_id'
      }
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Position"
    }
  }, {
    sequelize,
    tableName: 'catalog_category_product',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "entity_id" },
          { name: "category_id" },
          { name: "product_id" },
        ]
      },
      {
        name: "CATALOG_CATEGORY_PRODUCT_CATEGORY_ID_PRODUCT_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "category_id" },
          { name: "product_id" },
        ]
      },
      {
        name: "CATALOG_CATEGORY_PRODUCT_PRODUCT_ID",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
};
