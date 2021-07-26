const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CacheTag', {
    tag: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "Tag"
    },
    cache_id: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true,
      comment: "Cache Id"
    }
  }, {
    sequelize,
    tableName: 'cache_tag',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tag" },
          { name: "cache_id" },
        ]
      },
      {
        name: "CACHE_TAG_CACHE_ID",
        using: "BTREE",
        fields: [
          { name: "cache_id" },
        ]
      },
    ]
  });
};
