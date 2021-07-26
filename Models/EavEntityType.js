const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EavEntityType', {
    entity_type_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity Type ID"
    },
    entity_type_code: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Entity Type Code"
    },
    entity_model: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Entity Model"
    },
    attribute_model: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Attribute Model"
    },
    entity_table: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Entity Table"
    },
    value_table_prefix: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Value Table Prefix"
    },
    entity_id_field: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Entity ID Field"
    },
    is_data_sharing: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "Defines Is Data Sharing"
    },
    data_sharing_key: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "default",
      comment: "Data Sharing Key"
    },
    default_attribute_set_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Default Attribute Set ID"
    },
    increment_model: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Increment Model"
    },
    increment_per_store: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Increment Per Store"
    },
    increment_pad_length: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 8,
      comment: "Increment Pad Length"
    },
    increment_pad_char: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "0",
      comment: "Increment Pad Char"
    },
    additional_attribute_table: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Additional Attribute Table"
    },
    entity_attribute_collection: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Entity Attribute Collection"
    }
  }, {
    sequelize,
    tableName: 'eav_entity_type',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "entity_type_id" },
        ]
      },
      {
        name: "EAV_ENTITY_TYPE_ENTITY_TYPE_CODE",
        using: "BTREE",
        fields: [
          { name: "entity_type_code" },
        ]
      },
    ]
  });
};
