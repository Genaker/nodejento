const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Variable', {
    variable_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Variable ID"
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Variable Code",
      unique: "VARIABLE_CODE"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Variable Name"
    }
  }, {
    sequelize,
    tableName: 'variable',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "variable_id" },
        ]
      },
      {
        name: "VARIABLE_CODE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
};
