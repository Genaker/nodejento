const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RatingEntity', {
    entity_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    entity_code: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "Entity Code",
      unique: "RATING_ENTITY_ENTITY_CODE"
    }
  }, {
    sequelize,
    tableName: 'rating_entity',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "entity_id" },
        ]
      },
      {
        name: "RATING_ENTITY_ENTITY_CODE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "entity_code" },
        ]
      },
    ]
  });
};
