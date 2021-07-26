const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Flag', {
    flag_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Flag Id"
    },
    flag_code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Flag Code"
    },
    state: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Flag State"
    },
    flag_data: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Flag Data"
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Date of Last Flag Update"
    }
  }, {
    sequelize,
    tableName: 'flag',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "flag_id" },
        ]
      },
      {
        name: "FLAG_LAST_UPDATE",
        using: "BTREE",
        fields: [
          { name: "last_update" },
        ]
      },
    ]
  });
};
