const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OauthConsumer', {
    entity_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Created At"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00",
      comment: "Updated At"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Name of consumer"
    },
    key: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "Key code",
      unique: "OAUTH_CONSUMER_KEY"
    },
    secret: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "Secret code",
      unique: "OAUTH_CONSUMER_SECRET"
    },
    callback_url: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Callback URL"
    },
    rejected_callback_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "Rejected callback URL"
    }
  }, {
    sequelize,
    tableName: 'oauth_consumer',
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
        name: "OAUTH_CONSUMER_KEY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "key" },
        ]
      },
      {
        name: "OAUTH_CONSUMER_SECRET",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "secret" },
        ]
      },
      {
        name: "OAUTH_CONSUMER_CREATED_AT",
        using: "BTREE",
        fields: [
          { name: "created_at" },
        ]
      },
      {
        name: "OAUTH_CONSUMER_UPDATED_AT",
        using: "BTREE",
        fields: [
          { name: "updated_at" },
        ]
      },
    ]
  });
};
