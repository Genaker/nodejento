const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Session', {
    session_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      comment: "Session Id"
    },
    session_expires: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Date of Session Expiration"
    },
    session_data: {
      type: DataTypes.BLOB,
      allowNull: false,
      comment: "Session Data"
    }
  }, {
    sequelize,
    tableName: 'session',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "session_id" },
        ]
      },
    ]
  });
};
