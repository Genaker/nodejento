const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QueuePoisonPill', {
    version: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Poison Pill version."
    }
  }, {
    sequelize,
    tableName: 'queue_poison_pill',
    timestamps: false
  });
};
