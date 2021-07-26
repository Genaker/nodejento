const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EavAttributeSet', {
    attribute_set_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Attribute Set ID"
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
    attribute_set_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Attribute Set Name"
    },
    sort_order: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Sort Order"
    }
  }, {
    sequelize,
    tableName: 'eav_attribute_set',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "attribute_set_id" },
        ]
      },
      {
        name: "EAV_ATTRIBUTE_SET_ENTITY_TYPE_ID_ATTRIBUTE_SET_NAME",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "entity_type_id" },
          { name: "attribute_set_name" },
        ]
      },
      {
        name: "EAV_ATTRIBUTE_SET_ENTITY_TYPE_ID_SORT_ORDER",
        using: "BTREE",
        fields: [
          { name: "entity_type_id" },
          { name: "sort_order" },
        ]
      },
    ]
  });
};
