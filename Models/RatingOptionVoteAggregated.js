const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RatingOptionVoteAggregated', {
    primary_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Vote aggregation ID"
    },
    rating_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Rating ID",
      references: {
        model: 'rating',
        key: 'rating_id'
      }
    },
    entity_pk_value: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Product ID"
    },
    vote_count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Vote dty"
    },
    vote_value_sum: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "General vote sum"
    },
    percent: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Vote percent"
    },
    percent_approved: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      comment: "Vote percent approved by admin"
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
    tableName: 'rating_option_vote_aggregated',
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
        name: "RATING_OPTION_VOTE_AGGREGATED_RATING_ID",
        using: "BTREE",
        fields: [
          { name: "rating_id" },
        ]
      },
      {
        name: "RATING_OPTION_VOTE_AGGREGATED_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
