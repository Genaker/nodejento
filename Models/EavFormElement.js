const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EavFormElement', {
    element_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Element ID"
    },
    type_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      comment: "Type ID",
      references: {
        model: 'eav_form_type',
        key: 'type_id'
      }
    },
    fieldset_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Fieldset ID",
      references: {
        model: 'eav_form_fieldset',
        key: 'fieldset_id'
      }
    },
    attribute_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      comment: "Attribute ID",
      references: {
        model: 'eav_attribute',
        key: 'attribute_id'
      }
    },
    sort_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Sort Order"
    }
  }, {
    sequelize,
    tableName: 'eav_form_element',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "element_id" },
        ]
      },
      {
        name: "EAV_FORM_ELEMENT_TYPE_ID_ATTRIBUTE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "type_id" },
          { name: "attribute_id" },
        ]
      },
      {
        name: "EAV_FORM_ELEMENT_FIELDSET_ID",
        using: "BTREE",
        fields: [
          { name: "fieldset_id" },
        ]
      },
      {
        name: "EAV_FORM_ELEMENT_ATTRIBUTE_ID",
        using: "BTREE",
        fields: [
          { name: "attribute_id" },
        ]
      },
    ]
  });
};
