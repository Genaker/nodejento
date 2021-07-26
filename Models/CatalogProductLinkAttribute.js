const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductLinkAttribute', {
    product_link_attribute_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Product Link Attribute ID"
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
    },
    product_link_attribute_code: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Product Link Attribute Code"
    },
    data_type: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Data Type"
    }
  }, {
    sequelize,
    tableName: 'catalog_product_link_attribute',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_link_attribute_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_LINK_ATTRIBUTE_LINK_TYPE_ID",
        using: "BTREE",
        fields: [
          { name: "link_type_id" },
        ]
      },
    ]
  });
};
