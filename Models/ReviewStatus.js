const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReviewStatus', {
    status_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Status ID"
    },
    status_code: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "Status code"
    }
  }, {
    sequelize,
    tableName: 'review_status',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "status_id" },
        ]
      },
    ]
  });
};
