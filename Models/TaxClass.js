const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TaxClass', {
    class_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
      comment: "Class ID"
    },
    class_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Class Name"
    },
    class_type: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: "CUSTOMER",
      comment: "Class Type"
    }
  }, {
    sequelize,
    tableName: 'tax_class',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "class_id" },
        ]
      },
    ]
  });
};
