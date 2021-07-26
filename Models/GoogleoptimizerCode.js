const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GoogleoptimizerCode', {
    code_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Google experiment code ID"
    },
    entity_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Optimized entity ID product ID or catalog ID"
    },
    entity_type: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Optimized entity type"
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
      }
    },
    experiment_script: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Google experiment script"
    }
  }, {
    sequelize,
    tableName: 'googleoptimizer_code',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code_id" },
        ]
      },
      {
        name: "GOOGLEOPTIMIZER_CODE_STORE_ID_ENTITY_ID_ENTITY_TYPE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "store_id" },
          { name: "entity_id" },
          { name: "entity_type" },
        ]
      },
    ]
  });
};
