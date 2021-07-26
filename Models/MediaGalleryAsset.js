const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MediaGalleryAsset', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    path: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Path"
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Title"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Description"
    },
    source: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Source"
    },
    hash: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "File hash"
    },
    content_type: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Content Type"
    },
    width: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Width"
    },
    height: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Height"
    },
    size: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Asset file size in bytes"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Created At"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Updated At"
    }
  }, {
    sequelize,
    tableName: 'media_gallery_asset',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "MEDIA_GALLERY_ASSET_ID",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "MEDIA_GALLERY_ASSET_TITLE",
        type: "FULLTEXT",
        fields: [
          { name: "title" },
        ]
      },
    ]
  });
};
