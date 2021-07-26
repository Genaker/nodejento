const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RatingStore', {
    rating_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "Rating ID",
      references: {
        model: 'rating',
        key: 'rating_id'
      }
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
      }
    }
  }, {
    sequelize,
    tableName: 'rating_store',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rating_id" },
          { name: "store_id" },
        ]
      },
      {
        name: "RATING_STORE_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
