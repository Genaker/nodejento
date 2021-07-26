const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PatchList', {
    patch_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Patch Auto Increment"
    },
    patch_name: {
      type: DataTypes.STRING(1024),
      allowNull: false,
      comment: "Patch Class Name"
    }
  }, {
    sequelize,
    tableName: 'patch_list',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "patch_id" },
        ]
      },
    ]
  });
};
