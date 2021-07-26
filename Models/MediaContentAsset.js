const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MediaContentAsset', {
    asset_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    entity_type: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      comment: "Content type"
    },
    entity_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      comment: "Content entity id"
    },
    field: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      comment: "Content field"
    }
  }, {
    sequelize,
    tableName: 'media_content_asset',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "entity_type" },
          { name: "entity_id" },
          { name: "field" },
          { name: "asset_id" },
        ]
      },
      {
        name: "MEDIA_CONTENT_ASSET_ASSET_ID",
        using: "BTREE",
        fields: [
          { name: "asset_id" },
        ]
      },
    ]
  });
};
