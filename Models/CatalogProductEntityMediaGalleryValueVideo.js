const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductEntityMediaGalleryValueVideo', {
    value_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Media Entity ID",
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
    provider: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Video provider ID"
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Video URL"
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Title"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Page Meta Description"
    },
    metadata: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Video meta data"
    }
  }, {
    sequelize,
    tableName: 'catalog_product_entity_media_gallery_value_video',
    timestamps: false,
    indexes: [
      {
        name: "CAT_PRD_ENTT_MDA_GLR_VAL_VIDEO_VAL_ID_STORE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "value_id" },
          { name: "store_id" },
        ]
      },
      {
        name: "CAT_PRD_ENTT_MDA_GLR_VAL_VIDEO_STORE_ID_STORE_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
