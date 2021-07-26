const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesSequenceMeta', {
    meta_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "ID"
    },
    entity_type: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "Prefix"
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      comment: "Store ID"
    },
    sequence_table: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "table for sequence"
    }
  }, {
    sequelize,
    tableName: 'sales_sequence_meta',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "meta_id" },
        ]
      },
      {
        name: "SALES_SEQUENCE_META_ENTITY_TYPE_STORE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "entity_type" },
          { name: "store_id" },
        ]
      },
    ]
  });
};
