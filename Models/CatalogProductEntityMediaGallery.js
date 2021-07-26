const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductEntityMediaGallery', {
    value_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Value ID"
    },
    attribute_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Attribute ID",
      references: {
        model: 'eav_attribute',
        key: 'attribute_id'
      }
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Value"
    },
    media_type: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "image",
      comment: "Media entry type"
    },
    disabled: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Visibility status"
    }
  }, {
    sequelize,
    tableName: 'catalog_product_entity_media_gallery',
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
        name: "CATALOG_PRODUCT_ENTITY_MEDIA_GALLERY_ATTRIBUTE_ID",
        using: "BTREE",
        fields: [
          { name: "attribute_id" },
        ]
      },
    ]
  });
};
