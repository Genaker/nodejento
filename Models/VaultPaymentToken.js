const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VaultPaymentToken', {
    entity_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    customer_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Customer ID",
      references: {
        model: 'customer_entity',
        key: 'entity_id'
      }
    },
    public_hash: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: "Hash code for using on frontend",
      unique: "VAULT_PAYMENT_TOKEN_PUBLIC_HASH"
    },
    payment_method_code: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: "Payment method code"
    },
    type: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: "Type"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Created At"
    },
    expires_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Expires At"
    },
    gateway_token: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Gateway Token"
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Details"
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    is_visible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'vault_payment_token',
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
        name: "VAULT_PAYMENT_TOKEN_PUBLIC_HASH",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "public_hash" },
        ]
      },
      {
        name: "VAULT_PAYMENT_TOKEN_PAYMENT_METHOD_CODE_CSTR_ID_GATEWAY_TOKEN",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "payment_method_code" },
          { name: "customer_id" },
          { name: "gateway_token" },
        ]
      },
      {
        name: "VAULT_PAYMENT_TOKEN_CUSTOMER_ID_CUSTOMER_ENTITY_ENTITY_ID",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
    ]
  });
};
