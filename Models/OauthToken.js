const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OauthToken', {
    entity_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    consumer_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Oauth Consumer ID",
      references: {
        model: 'oauth_consumer',
        key: 'entity_id'
      }
    },
    admin_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Admin user ID",
      references: {
        model: 'admin_user',
        key: 'user_id'
      }
    },
    customer_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Customer user ID",
      references: {
        model: 'customer_entity',
        key: 'entity_id'
      }
    },
    type: {
      type: DataTypes.STRING(16),
      allowNull: false,
      comment: "Token Type"
    },
    token: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "Token",
      unique: "OAUTH_TOKEN_TOKEN"
    },
    secret: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "Token Secret"
    },
    verifier: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Token Verifier"
    },
    callback_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "Token Callback URL"
    },
    revoked: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Token revoked"
    },
    authorized: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Token authorized"
    },
    user_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "User type"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Token creation timestamp"
    }
  }, {
    sequelize,
    tableName: 'oauth_token',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "entity_id" },
        ]
      },
      {
        name: "OAUTH_TOKEN_TOKEN",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "token" },
        ]
      },
      {
        name: "OAUTH_TOKEN_ADMIN_ID_ADMIN_USER_USER_ID",
        using: "BTREE",
        fields: [
          { name: "admin_id" },
        ]
      },
      {
        name: "OAUTH_TOKEN_CUSTOMER_ID_CUSTOMER_ENTITY_ENTITY_ID",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "OAUTH_TOKEN_CONSUMER_ID",
        using: "BTREE",
        fields: [
          { name: "consumer_id" },
        ]
      },
    ]
  });
};
