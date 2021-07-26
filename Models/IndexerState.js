const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IndexerState', {
    state_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Indexer State ID"
    },
    indexer_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Indexer ID"
    },
    status: {
      type: DataTypes.STRING(16),
      allowNull: true,
      defaultValue: "invalid",
      comment: "Indexer Status"
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Indexer Status"
    },
    hash_config: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "Hash of indexer config"
    }
  }, {
    sequelize,
    tableName: 'indexer_state',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "state_id" },
        ]
      },
      {
        name: "INDEXER_STATE_INDEXER_ID",
        using: "BTREE",
        fields: [
          { name: "indexer_id" },
        ]
      },
    ]
  });
};
