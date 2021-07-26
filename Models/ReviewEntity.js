const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReviewEntity', {
    entity_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Review entity ID"
    },
    entity_code: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "Review entity code"
    }
  }, {
    sequelize,
    tableName: 'review_entity',
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
    ]
  });
};
