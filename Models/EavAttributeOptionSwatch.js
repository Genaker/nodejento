const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EavAttributeOptionSwatch', {
    swatch_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Swatch ID"
    },
    option_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Option ID",
      references: {
        model: 'eav_attribute_option',
        key: 'option_id'
      }
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
      }
    },
    type: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      comment: "Swatch type: 0 - text, 1 - visual color, 2 - visual image"
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Swatch Value"
    }
  }, {
    sequelize,
    tableName: 'eav_attribute_option_swatch',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "swatch_id" },
        ]
      },
      {
        name: "EAV_ATTRIBUTE_OPTION_SWATCH_STORE_ID_OPTION_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "store_id" },
          { name: "option_id" },
        ]
      },
      {
        name: "EAV_ATTR_OPT_SWATCH_OPT_ID_EAV_ATTR_OPT_OPT_ID",
        using: "BTREE",
        fields: [
          { name: "option_id" },
        ]
      },
      {
        name: "EAV_ATTRIBUTE_OPTION_SWATCH_SWATCH_ID",
        using: "BTREE",
        fields: [
          { name: "swatch_id" },
        ]
      },
    ]
  });
};
