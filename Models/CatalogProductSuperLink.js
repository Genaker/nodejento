const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductSuperLink', {
    link_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Link ID"
    },
    product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Product ID",
      references: {
        model: 'catalog_product_entity',
        key: 'entity_id'
      }
    },
    parent_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Parent ID",
      references: {
        model: 'catalog_product_entity',
        key: 'entity_id'
      }
    }
  }, {
    sequelize,
    tableName: 'catalog_product_super_link',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "link_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_SUPER_LINK_PRODUCT_ID_PARENT_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_id" },
          { name: "parent_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_SUPER_LINK_PARENT_ID",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
    ]
  });
};
