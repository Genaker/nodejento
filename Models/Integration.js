const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Integration', {
    integration_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Integration ID"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Integration name is displayed in the admin interface",
      unique: "INTEGRATION_NAME"
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Email address of the contact person"
    },
    endpoint: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Endpoint for posting consumer credentials"
    },
    status: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      comment: "Integration status"
    },
    consumer_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Oauth consumer",
      references: {
        model: 'oauth_consumer',
        key: 'entity_id'
      },
      unique: "INTEGRATION_CONSUMER_ID_OAUTH_CONSUMER_ENTITY_ID"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Creation Time"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Update Time"
    },
    setup_type: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Integration type - manual or config file"
    },
    identity_link_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Identity linking Url"
    }
  }, {
    sequelize,
    tableName: 'integration',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "integration_id" },
        ]
      },
      {
        name: "INTEGRATION_NAME",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "INTEGRATION_CONSUMER_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "consumer_id" },
        ]
      },
    ]
  });
};
