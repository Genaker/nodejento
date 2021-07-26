const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductLinkAttributeInt', {
    value_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Value ID"
    },
    product_link_attribute_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Product Link Attribute ID",
      references: {
        model: 'catalog_product_link_attribute',
        key: 'product_link_attribute_id'
      }
    },
    link_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Link ID",
      references: {
        model: 'catalog_product_link',
        key: 'link_id'
      }
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Value"
    }
  }, {
    sequelize,
    tableName: 'catalog_product_link_attribute_int',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "value_id" },
        ]
      },
      {
        name: "CAT_PRD_LNK_ATTR_INT_PRD_LNK_ATTR_ID_LNK_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_link_attribute_id" },
          { name: "link_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_LINK_ATTRIBUTE_INT_LINK_ID",
        using: "BTREE",
        fields: [
          { name: "link_id" },
        ]
      },
    ]
  });
};
