const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SearchSynonyms', {
    group_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Synonyms Group ID"
    },
    synonyms: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "list of synonyms making up this group"
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Store ID - identifies the store view these synonyms belong to",
      references: {
        model: 'store',
        key: 'store_id'
      }
    },
    website_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Website ID - identifies the website ID these synonyms belong to",
      references: {
        model: 'store_website',
        key: 'website_id'
      }
    }
  }, {
    sequelize,
    tableName: 'search_synonyms',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "group_id" },
        ]
      },
      {
        name: "SEARCH_SYNONYMS_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
      {
        name: "SEARCH_SYNONYMS_WEBSITE_ID",
        using: "BTREE",
        fields: [
          { name: "website_id" },
        ]
      },
      {
        name: "SEARCH_SYNONYMS_SYNONYMS",
        type: "FULLTEXT",
        fields: [
          { name: "synonyms" },
        ]
      },
    ]
  });
};
