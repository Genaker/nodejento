const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EavFormTypeEntity', {
    type_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Type ID",
      references: {
        model: 'eav_form_type',
        key: 'type_id'
      }
    },
    entity_type_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity Type ID",
      references: {
        model: 'eav_entity_type',
        key: 'entity_type_id'
      }
    }
  }, {
    sequelize,
    tableName: 'eav_form_type_entity',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "type_id" },
          { name: "entity_type_id" },
        ]
      },
      {
        name: "EAV_FORM_TYPE_ENTITY_ENTITY_TYPE_ID",
        using: "BTREE",
        fields: [
          { name: "entity_type_id" },
        ]
      },
    ]
  });
};
