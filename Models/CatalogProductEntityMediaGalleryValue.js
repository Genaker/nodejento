const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductEntityMediaGalleryValue', {
    value_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Value ID",
      references: {
        model: 'catalog_product_entity_media_gallery',
        key: 'value_id'
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
    entity_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Entity ID",
      references: {
        model: 'catalog_product_entity',
        key: 'entity_id'
      }
    },
    label: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Label"
    },
    position: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Position"
    },
    disabled: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Disabled"
    },
    record_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Record ID"
    }
  }, {
    sequelize,
    tableName: 'catalog_product_entity_media_gallery_value',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "record_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_ENTITY_MEDIA_GALLERY_VALUE_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_ENTITY_MEDIA_GALLERY_VALUE_ENTITY_ID",
        using: "BTREE",
        fields: [
          { name: "entity_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_ENTITY_MEDIA_GALLERY_VALUE_VALUE_ID",
        using: "BTREE",
        fields: [
          { name: "value_id" },
        ]
      },
      {
        name: "CAT_PRD_ENTT_MDA_GLR_VAL_ENTT_ID_VAL_ID_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "entity_id" },
          { name: "value_id" },
          { name: "store_id" },
        ]
      },
    ]
  });
};
