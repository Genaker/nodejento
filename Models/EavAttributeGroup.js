const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EavAttributeGroup', {
    attribute_group_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Attribute Group ID"
    },
    attribute_set_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Attribute Set ID",
      references: {
        model: 'eav_attribute_set',
        key: 'attribute_set_id'
      }
    },
    attribute_group_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Attribute Group Name"
    },
    sort_order: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Sort Order"
    },
    default_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "Default ID"
    },
    attribute_group_code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Attribute Group Code"
    },
    tab_group_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Tab Group Code"
    }
  }, {
    sequelize,
    tableName: 'eav_attribute_group',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "attribute_group_id" },
        ]
      },
      {
        name: "EAV_ATTRIBUTE_GROUP_ATTRIBUTE_SET_ID_ATTRIBUTE_GROUP_CODE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "attribute_set_id" },
          { name: "attribute_group_code" },
        ]
      },
      {
        name: "EAV_ATTRIBUTE_GROUP_ATTRIBUTE_SET_ID_ATTRIBUTE_GROUP_NAME",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "attribute_set_id" },
          { name: "attribute_group_name" },
        ]
      },
      {
        name: "EAV_ATTRIBUTE_GROUP_ATTRIBUTE_SET_ID_SORT_ORDER",
        using: "BTREE",
        fields: [
          { name: "attribute_set_id" },
          { name: "sort_order" },
        ]
      },
    ]
  });
};
