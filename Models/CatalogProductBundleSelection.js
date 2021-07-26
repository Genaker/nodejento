const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductBundleSelection', {
    selection_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Selection ID"
    },
    option_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Option ID",
      references: {
        model: 'catalog_product_bundle_option',
        key: 'option_id'
      }
    },
    parent_product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Parent Product ID"
    },
    product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Product ID",
      references: {
        model: 'catalog_product_entity',
        key: 'entity_id'
      }
    },
    position: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Position"
    },
    is_default: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Default"
    },
    selection_price_type: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Selection Price Type"
    },
    selection_price_value: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Selection Price Value"
    },
    selection_qty: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Selection Qty"
    },
    selection_can_change_qty: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Selection Can Change Qty"
    }
  }, {
    sequelize,
    tableName: 'catalog_product_bundle_selection',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "selection_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_BUNDLE_SELECTION_OPTION_ID",
        using: "BTREE",
        fields: [
          { name: "option_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_BUNDLE_SELECTION_PRODUCT_ID",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
};
