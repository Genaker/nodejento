const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductSuperAttributeLabel', {
    value_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Value ID"
    },
    product_super_attribute_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Product Super Attribute ID",
      references: {
        model: 'catalog_product_super_attribute',
        key: 'product_super_attribute_id'
      }
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
      }
    },
    use_default: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "Use Default Value"
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Value"
    }
  }, {
    sequelize,
    tableName: 'catalog_product_super_attribute_label',
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
        name: "CAT_PRD_SPR_ATTR_LBL_PRD_SPR_ATTR_ID_STORE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_super_attribute_id" },
          { name: "store_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_SUPER_ATTRIBUTE_LABEL_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
