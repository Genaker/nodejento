const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EavAttributeOptionValue', {
    value_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Value ID"
    },
    option_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Option ID",
      references: {
        model: 'eav_attribute_option',
        key: 'option_id'
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
    value: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Value"
    }
  }, {
    sequelize,
    tableName: 'eav_attribute_option_value',
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
        name: "EAV_ATTRIBUTE_OPTION_VALUE_OPTION_ID",
        using: "BTREE",
        fields: [
          { name: "option_id" },
        ]
      },
      {
        name: "EAV_ATTRIBUTE_OPTION_VALUE_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
