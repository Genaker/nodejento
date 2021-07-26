const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AuthorizationRole', {
    role_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Role ID"
    },
    parent_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Parent Role ID"
    },
    tree_level: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Role Tree Level"
    },
    sort_order: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Role Sort Order"
    },
    role_type: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "0",
      comment: "Role Type"
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "User ID"
    },
    user_type: {
      type: DataTypes.STRING(16),
      allowNull: true,
      comment: "User Type"
    },
    role_name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Role Name"
    }
  }, {
    sequelize,
    tableName: 'authorization_role',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "role_id" },
        ]
      },
      {
        name: "AUTHORIZATION_ROLE_PARENT_ID_SORT_ORDER",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
          { name: "sort_order" },
        ]
      },
      {
        name: "AUTHORIZATION_ROLE_TREE_LEVEL",
        using: "BTREE",
        fields: [
          { name: "tree_level" },
        ]
      },
    ]
  });
};
