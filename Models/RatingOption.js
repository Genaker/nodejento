const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RatingOption', {
    option_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Rating Option ID"
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
    code: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "Rating Option Code"
    },
    value: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Rating Option Value"
    },
    position: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Ration option position on Storefront"
    }
  }, {
    sequelize,
    tableName: 'rating_option',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "option_id" },
        ]
      },
      {
        name: "RATING_OPTION_RATING_ID",
        using: "BTREE",
        fields: [
          { name: "rating_id" },
        ]
      },
    ]
  });
};
