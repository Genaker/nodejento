const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OauthNonce', {
    nonce: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "Nonce String"
    },
    timestamp: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Nonce Timestamp"
    },
    consumer_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Consumer ID",
      references: {
        model: 'oauth_consumer',
        key: 'entity_id'
      }
    }
  }, {
    sequelize,
    tableName: 'oauth_nonce',
    timestamps: false,
    indexes: [
      {
        name: "OAUTH_NONCE_NONCE_CONSUMER_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nonce" },
          { name: "consumer_id" },
        ]
      },
      {
        name: "OAUTH_NONCE_CONSUMER_ID_OAUTH_CONSUMER_ENTITY_ID",
        using: "BTREE",
        fields: [
          { name: "consumer_id" },
        ]
      },
      {
        name: "OAUTH_NONCE_TIMESTAMP",
        using: "BTREE",
        fields: [
          { name: "timestamp" },
        ]
      },
    ]
  });
};
