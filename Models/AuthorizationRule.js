const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AuthorizationRule', {
    rule_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Rule ID"
    },
    role_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Role ID",
      references: {
        model: 'authorization_role',
        key: 'role_id'
      }
    },
    resource_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Resource ID"
    },
    privileges: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "Privileges"
    },
    permission: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "Permission"
    }
  }, {
    sequelize,
    tableName: 'authorization_rule',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rule_id" },
        ]
      },
      {
        name: "AUTHORIZATION_RULE_RESOURCE_ID_ROLE_ID",
        using: "BTREE",
        fields: [
          { name: "resource_id" },
          { name: "role_id" },
        ]
      },
      {
        name: "AUTHORIZATION_RULE_ROLE_ID_RESOURCE_ID",
        using: "BTREE",
        fields: [
          { name: "role_id" },
          { name: "resource_id" },
        ]
      },
    ]
  });
};
