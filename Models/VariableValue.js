const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VariableValue', {
    value_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Variable Value ID"
    },
    variable_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Variable ID",
      references: {
        model: 'variable',
        key: 'variable_id'
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
    plain_value: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Plain Text Value"
    },
    html_value: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Html Value"
    }
  }, {
    sequelize,
    tableName: 'variable_value',
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
        name: "VARIABLE_VALUE_VARIABLE_ID_STORE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "variable_id" },
          { name: "store_id" },
        ]
      },
      {
        name: "VARIABLE_VALUE_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
