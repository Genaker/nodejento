const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ImportexportImportdata', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "ID"
    },
    entity: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Entity"
    },
    behavior: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "append",
      comment: "Behavior"
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Data"
    }
  }, {
    sequelize,
    tableName: 'importexport_importdata',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
