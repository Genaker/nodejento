const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EavAttribute', {
    attribute_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Attribute ID"
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
    attribute_code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Attribute Code"
    },
    attribute_model: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Attribute Model"
    },
    backend_model: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Backend Model"
    },
    backend_type: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: "static",
      comment: "Backend Type"
    },
    backend_table: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Backend Table"
    },
    frontend_model: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Frontend Model"
    },
    frontend_input: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Frontend Input"
    },
    frontend_label: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Frontend Label"
    },
    frontend_class: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Frontend Class"
    },
    source_model: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Source Model"
    },
    is_required: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Defines Is Required"
    },
    is_user_defined: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Defines Is User Defined"
    },
    default_value: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Default Value"
    },
    is_unique: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Defines Is Unique"
    },
    note: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Note"
    }
  }, {
    sequelize,
    tableName: 'eav_attribute',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "attribute_id" },
        ]
      },
      {
        name: "EAV_ATTRIBUTE_ENTITY_TYPE_ID_ATTRIBUTE_CODE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "entity_type_id" },
          { name: "attribute_code" },
        ]
      },
      {
        name: "EAV_ATTRIBUTE_FRONTEND_INPUT_ENTITY_TYPE_ID_IS_USER_DEFINED",
        using: "BTREE",
        fields: [
          { name: "frontend_input" },
          { name: "entity_type_id" },
          { name: "is_user_defined" },
        ]
      },
    ]
  });
};
