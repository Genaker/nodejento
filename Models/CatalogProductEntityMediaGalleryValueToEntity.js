const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductEntityMediaGalleryValueToEntity', {
    value_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Value media Entry ID",
      references: {
        model: 'catalog_product_entity_media_gallery',
        key: 'value_id'
      }
    },
    entity_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Product Entity ID",
      references: {
        model: 'catalog_product_entity',
        key: 'entity_id'
      }
    }
  }, {
    sequelize,
    tableName: 'catalog_product_entity_media_gallery_value_to_entity',
    timestamps: false,
    indexes: [
      {
        name: "CAT_PRD_ENTT_MDA_GLR_VAL_TO_ENTT_VAL_ID_ENTT_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "value_id" },
          { name: "entity_id" },
        ]
      },
      {
        name: "CAT_PRD_ENTT_MDA_GLR_VAL_TO_ENTT_ENTT_ID_CAT_PRD_ENTT_ENTT_ID",
        using: "BTREE",
        fields: [
          { name: "entity_id" },
        ]
      },
    ]
  });
};
