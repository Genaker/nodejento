const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EavFormFieldset', {
    fieldset_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Fieldset ID"
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
    code: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "Code"
    },
    sort_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Sort Order"
    }
  }, {
    sequelize,
    tableName: 'eav_form_fieldset',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "fieldset_id" },
        ]
      },
      {
        name: "EAV_FORM_FIELDSET_TYPE_ID_CODE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "type_id" },
          { name: "code" },
        ]
      },
    ]
  });
};
