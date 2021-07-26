const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EavFormType', {
    type_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Type ID"
    },
    code: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "Code"
    },
    label: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Label"
    },
    is_system: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is System"
    },
    theme: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "Theme"
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
      }
    }
  }, {
    sequelize,
    tableName: 'eav_form_type',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "type_id" },
        ]
      },
      {
        name: "EAV_FORM_TYPE_CODE_THEME_STORE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code" },
          { name: "theme" },
          { name: "store_id" },
        ]
      },
      {
        name: "EAV_FORM_TYPE_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
