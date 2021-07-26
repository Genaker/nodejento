const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SendfriendLog', {
    log_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Log ID"
    },
    ip: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Customer IP address"
    },
    time: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Log time"
    },
    website_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Website ID"
    }
  }, {
    sequelize,
    tableName: 'sendfriend_log',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "log_id" },
        ]
      },
      {
        name: "SENDFRIEND_LOG_IP",
        using: "BTREE",
        fields: [
          { name: "ip" },
        ]
      },
      {
        name: "SENDFRIEND_LOG_TIME",
        using: "BTREE",
        fields: [
          { name: "time" },
        ]
      },
    ]
  });
};
