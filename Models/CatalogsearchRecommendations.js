const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogsearchRecommendations', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "ID"
    },
    query_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Query ID",
      references: {
        model: 'search_query',
        key: 'query_id'
      }
    },
    relation_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Relation ID",
      references: {
        model: 'search_query',
        key: 'query_id'
      }
    }
  }, {
    sequelize,
    tableName: 'catalogsearch_recommendations',
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
        name: "CATALOGSEARCH_RECOMMENDATIONS_QUERY_ID_SEARCH_QUERY_QUERY_ID",
        using: "BTREE",
        fields: [
          { name: "query_id" },
        ]
      },
      {
        name: "CATALOGSEARCH_RECOMMENDATIONS_RELATION_ID_SEARCH_QUERY_QUERY_ID",
        using: "BTREE",
        fields: [
          { name: "relation_id" },
        ]
      },
    ]
  });
};
