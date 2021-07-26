const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RatingOptionVote', {
    vote_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Vote ID"
    },
    option_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Vote option ID",
      references: {
        model: 'rating_option',
        key: 'option_id'
      }
    },
    remote_ip: {
      type: DataTypes.STRING(16),
      allowNull: false,
      comment: "Customer IP"
    },
    remote_ip_long: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Customer IP converted to long integer format"
    },
    customer_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "Customer ID"
    },
    entity_pk_value: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Product ID"
    },
    rating_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Rating ID"
    },
    review_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      comment: "Review ID",
      references: {
        model: 'review',
        key: 'review_id'
      }
    },
    percent: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Percent amount"
    },
    value: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Vote option value"
    }
  }, {
    sequelize,
    tableName: 'rating_option_vote',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "vote_id" },
        ]
      },
      {
        name: "RATING_OPTION_VOTE_REVIEW_ID_REVIEW_REVIEW_ID",
        using: "BTREE",
        fields: [
          { name: "review_id" },
        ]
      },
      {
        name: "RATING_OPTION_VOTE_OPTION_ID",
        using: "BTREE",
        fields: [
          { name: "option_id" },
        ]
      },
    ]
  });
};
