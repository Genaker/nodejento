const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AdminPasswords', {
    password_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Password ID"
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "User ID",
      references: {
        model: 'admin_user',
        key: 'user_id'
      }
    },
    password_hash: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Password Hash"
    },
    expires: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Deprecated"
    },
    last_updated: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Last Updated"
    }
  }, {
    sequelize,
    tableName: 'admin_passwords',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "password_id" },
        ]
      },
      {
        name: "ADMIN_PASSWORDS_USER_ID",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
