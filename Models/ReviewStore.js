const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReviewStore', {
    review_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Review ID",
      references: {
        model: 'review',
        key: 'review_id'
      }
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
      }
    }
  }, {
    sequelize,
    tableName: 'review_store',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "review_id" },
          { name: "store_id" },
        ]
      },
      {
        name: "REVIEW_STORE_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
