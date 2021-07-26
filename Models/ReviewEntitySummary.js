const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReviewEntitySummary', {
    primary_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      comment: "Summary review entity ID"
    },
    entity_pk_value: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Product ID"
    },
    entity_type: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Entity type ID"
    },
    reviews_count: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Qty of reviews"
    },
    rating_summary: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Summarized rating"
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
    }
  }, {
    sequelize,
    tableName: 'review_entity_summary',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "primary_id" },
        ]
      },
      {
        name: "REVIEW_ENTITY_SUMMARY_ENTITY_PK_VALUE_STORE_ID_ENTITY_TYPE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "entity_pk_value" },
          { name: "store_id" },
          { name: "entity_type" },
        ]
      },
      {
        name: "REVIEW_ENTITY_SUMMARY_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
