const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MediaGalleryAssetKeyword', {
    keyword_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Keyword Id",
      references: {
        model: 'media_gallery_keyword',
        key: 'id'
      }
    },
    asset_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Asset ID",
      references: {
        model: 'media_gallery_asset',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'media_gallery_asset_keyword',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "keyword_id" },
          { name: "asset_id" },
        ]
      },
      {
        name: "MEDIA_GALLERY_ASSET_KEYWORD_ASSET_ID",
        using: "BTREE",
        fields: [
          { name: "asset_id" },
        ]
      },
      {
        name: "MEDIA_GALLERY_ASSET_KEYWORD_KEYWORD_ID",
        using: "BTREE",
        fields: [
          { name: "keyword_id" },
        ]
      },
    ]
  });
};
