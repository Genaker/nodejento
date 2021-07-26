const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductOption', {
    option_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Option ID"
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
    type: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Type"
    },
    is_require: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1,
      comment: "Is Required"
    },
    sku: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "SKU"
    },
    max_characters: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Max Characters"
    },
    file_extension: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "File Extension"
    },
    image_size_x: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Image Size X"
    },
    image_size_y: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Image Size Y"
    },
    sort_order: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Sort Order"
    }
  }, {
    sequelize,
    tableName: 'catalog_product_option',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "option_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_OPTION_PRODUCT_ID",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
};
