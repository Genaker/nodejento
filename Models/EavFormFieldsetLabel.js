const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EavFormFieldsetLabel', {
    fieldset_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Fieldset ID",
      references: {
        model: 'eav_form_fieldset',
        key: 'fieldset_id'
      }
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
      }
    },
    label: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Label"
    }
  }, {
    sequelize,
    tableName: 'eav_form_fieldset_label',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "fieldset_id" },
          { name: "store_id" },
        ]
      },
      {
        name: "EAV_FORM_FIELDSET_LABEL_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
