const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SearchQuery', {
    query_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Query ID"
    },
    query_text: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Query text"
    },
    num_results: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Num results"
    },
    popularity: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Popularity"
    },
    redirect: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Redirect"
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
    display_in_terms: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1,
      comment: "Display in terms"
    },
    is_active: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 1,
      comment: "Active status"
    },
    is_processed: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      comment: "Processed status"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Updated at"
    }
  }, {
    sequelize,
    tableName: 'search_query',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "query_id" },
        ]
      },
      {
        name: "SEARCH_QUERY_QUERY_TEXT_STORE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "query_text" },
          { name: "store_id" },
        ]
      },
      {
        name: "SEARCH_QUERY_QUERY_TEXT_STORE_ID_POPULARITY",
        using: "BTREE",
        fields: [
          { name: "query_text" },
          { name: "store_id" },
          { name: "popularity" },
        ]
      },
      {
        name: "SEARCH_QUERY_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
      {
        name: "SEARCH_QUERY_IS_PROCESSED",
        using: "BTREE",
        fields: [
          { name: "is_processed" },
        ]
      },
      {
        name: "SEARCH_QUERY_STORE_ID_POPULARITY",
        using: "BTREE",
        fields: [
          { name: "store_id" },
          { name: "popularity" },
        ]
      },
    ]
  });
};
