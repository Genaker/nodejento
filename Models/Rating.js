const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Rating', {
    rating_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Rating ID"
    },
    entity_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Entity ID",
      references: {
        model: 'rating_entity',
        key: 'entity_id'
      }
    },
    rating_code: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "Rating Code",
      unique: "RATING_RATING_CODE"
    },
    position: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Rating Position On Storefront"
    },
    is_active: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1,
      comment: "Rating is active."
    }
  }, {
    sequelize,
    tableName: 'rating',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rating_id" },
        ]
      },
      {
        name: "RATING_RATING_CODE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rating_code" },
        ]
      },
      {
        name: "RATING_ENTITY_ID",
        using: "BTREE",
        fields: [
          { name: "entity_id" },
        ]
      },
    ]
  });
};
