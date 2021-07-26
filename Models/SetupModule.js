const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SetupModule', {
    module: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      comment: "Module"
    },
    schema_version: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Schema Version"
    },
    data_version: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Data Version"
    }
  }, {
    sequelize,
    tableName: 'setup_module',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "module" },
        ]
      },
    ]
  });
};
