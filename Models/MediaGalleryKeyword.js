const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MediaGalleryKeyword', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Keyword ID"
    },
    keyword: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Keyword",
      unique: "MEDIA_GALLERY_KEYWORD_KEYWORD"
    }
  }, {
    sequelize,
    tableName: 'media_gallery_keyword',
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
        name: "MEDIA_GALLERY_KEYWORD_KEYWORD",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "keyword" },
        ]
      },
      {
        name: "MEDIA_GALLERY_KEYWORD_ID",
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
