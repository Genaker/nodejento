const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CustomerFormAttribute', {
    form_code: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      comment: "Form Code"
    },
    attribute_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Attribute ID",
      references: {
        model: 'eav_attribute',
        key: 'attribute_id'
      }
    }
  }, {
    sequelize,
    tableName: 'customer_form_attribute',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "form_code" },
          { name: "attribute_id" },
        ]
      },
      {
        name: "CUSTOMER_FORM_ATTRIBUTE_ATTRIBUTE_ID",
        using: "BTREE",
        fields: [
          { name: "attribute_id" },
        ]
      },
    ]
  });
};
