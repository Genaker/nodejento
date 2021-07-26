const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductBundleOptionValue', {
    value_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Value ID"
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
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      comment: "Store ID"
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Title"
    },
    parent_product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Parent Product ID"
    }
  }, {
    sequelize,
    tableName: 'catalog_product_bundle_option_value',
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
        name: "CAT_PRD_BNDL_OPT_VAL_OPT_ID_PARENT_PRD_ID_STORE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "option_id" },
          { name: "parent_product_id" },
          { name: "store_id" },
        ]
      },
    ]
  });
};
