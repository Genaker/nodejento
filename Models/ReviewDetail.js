const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReviewDetail', {
    detail_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Review detail ID"
    },
    review_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Review ID",
      references: {
        model: 'review',
        key: 'review_id'
      }
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
      }
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Title"
    },
    detail: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "Detail description"
    },
    nickname: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: "User nickname"
    },
    customer_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Customer ID",
      references: {
        model: 'customer_entity',
        key: 'entity_id'
      }
    }
  }, {
    sequelize,
    tableName: 'review_detail',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "detail_id" },
        ]
      },
      {
        name: "REVIEW_DETAIL_REVIEW_ID",
        using: "BTREE",
        fields: [
          { name: "review_id" },
        ]
      },
      {
        name: "REVIEW_DETAIL_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
      {
        name: "REVIEW_DETAIL_CUSTOMER_ID",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
    ]
  });
};
