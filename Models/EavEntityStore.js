const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EavEntityStore', {
    entity_store_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity Store ID"
    },
    entity_type_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Entity Type ID",
      references: {
        model: 'eav_entity_type',
        key: 'entity_type_id'
      }
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
      }
    },
    increment_prefix: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "Increment Prefix"
    },
    increment_last_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Last Incremented ID"
    }
  }, {
    sequelize,
    tableName: 'eav_entity_store',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "entity_store_id" },
        ]
      },
      {
        name: "EAV_ENTITY_STORE_ENTITY_TYPE_ID",
        using: "BTREE",
        fields: [
          { name: "entity_type_id" },
        ]
      },
      {
        name: "EAV_ENTITY_STORE_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
