const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Cache', {
    id: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true,
      comment: "Cache Id"
    },
    data: {
      type: DataTypes.BLOB,
      allowNull: true,
      comment: "Cache Data"
    },
    create_time: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Cache Creation Time"
    },
    update_time: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Time of Cache Updating"
    },
    expire_time: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Cache Expiration Time"
    }
  }, {
    sequelize,
    tableName: 'cache',
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
      {
        name: "CACHE_EXPIRE_TIME",
        using: "BTREE",
        fields: [
          { name: "expire_time" },
        ]
      },
    ]
  });
};
