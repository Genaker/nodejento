const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EavEntityInt', {
    value_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Value ID"
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
    attribute_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Attribute ID"
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
    entity_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Entity ID",
      references: {
        model: 'eav_entity',
        key: 'entity_id'
      }
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Attribute Value"
    }
  }, {
    sequelize,
    tableName: 'eav_entity_int',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "value_id" },
        ]
      },
      {
        name: "EAV_ENTITY_INT_ENTITY_ID_ATTRIBUTE_ID_STORE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "entity_id" },
          { name: "attribute_id" },
          { name: "store_id" },
        ]
      },
      {
        name: "EAV_ENTITY_INT_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
      {
        name: "EAV_ENTITY_INT_ATTRIBUTE_ID_VALUE",
        using: "BTREE",
        fields: [
          { name: "attribute_id" },
          { name: "value" },
        ]
      },
      {
        name: "EAV_ENTITY_INT_ENTITY_TYPE_ID_VALUE",
        using: "BTREE",
        fields: [
          { name: "entity_type_id" },
          { name: "value" },
        ]
      },
    ]
  });
};
