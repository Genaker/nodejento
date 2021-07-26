const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CaptchaLog', {
    type: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      comment: "Type"
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      comment: "Value"
    },
    count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Count"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Update Time"
    }
  }, {
    sequelize,
    tableName: 'captcha_log',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "type" },
          { name: "value" },
        ]
      },
    ]
  });
};
