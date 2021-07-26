const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductLink', {
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
    linked_product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Linked Product ID",
      references: {
        model: 'catalog_product_entity',
        key: 'entity_id'
      }
    },
    link_type_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Link Type ID",
      references: {
        model: 'catalog_product_link_type',
        key: 'link_type_id'
      }
    }
  }, {
    sequelize,
    tableName: 'catalog_product_link',
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
        name: "CATALOG_PRODUCT_LINK_LINK_TYPE_ID_PRODUCT_ID_LINKED_PRODUCT_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "link_type_id" },
          { name: "product_id" },
          { name: "linked_product_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_LINK_PRODUCT_ID",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_LINK_LINKED_PRODUCT_ID",
        using: "BTREE",
        fields: [
          { name: "linked_product_id" },
        ]
      },
    ]
  });
};
