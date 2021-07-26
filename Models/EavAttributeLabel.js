const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EavAttributeLabel', {
    attribute_label_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Attribute Label ID"
    },
    attribute_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Attribute ID",
      references: {
        model: 'eav_attribute',
        key: 'attribute_id'
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
    tableName: 'eav_attribute_label',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "attribute_label_id" },
        ]
      },
      {
        name: "EAV_ATTRIBUTE_LABEL_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
      {
        name: "EAV_ATTRIBUTE_LABEL_ATTRIBUTE_ID_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "attribute_id" },
          { name: "store_id" },
        ]
      },
    ]
  });
};
