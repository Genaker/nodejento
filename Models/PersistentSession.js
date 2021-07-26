const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PersistentSession', {
    persistent_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Session ID"
    },
    key: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Unique cookie key",
      unique: "PERSISTENT_SESSION_KEY"
    },
    customer_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Customer ID",
      references: {
        model: 'customer_entity',
        key: 'entity_id'
      },
      unique: "PERSISTENT_SESSION_CUSTOMER_ID_CUSTOMER_ENTITY_ENTITY_ID"
    },
    website_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Website ID",
      references: {
        model: 'store_website',
        key: 'website_id'
      }
    },
    info: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Session Data"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Updated At"
    }
  }, {
    sequelize,
    tableName: 'persistent_session',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "persistent_id" },
        ]
      },
      {
        name: "PERSISTENT_SESSION_KEY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "key" },
        ]
      },
      {
        name: "PERSISTENT_SESSION_CUSTOMER_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "PERSISTENT_SESSION_WEBSITE_ID_STORE_WEBSITE_WEBSITE_ID",
        using: "BTREE",
        fields: [
          { name: "website_id" },
        ]
      },
      {
        name: "PERSISTENT_SESSION_UPDATED_AT",
        using: "BTREE",
        fields: [
          { name: "updated_at" },
        ]
      },
    ]
  });
};
