const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VaultPaymentTokenOrderPaymentLink', {
    order_payment_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Order payment ID",
      references: {
        model: 'sales_order_payment',
        key: 'entity_id'
      }
    },
    payment_token_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Payment token ID",
      references: {
        model: 'vault_payment_token',
        key: 'entity_id'
      }
    }
  }, {
    sequelize,
    tableName: 'vault_payment_token_order_payment_link',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_payment_id" },
          { name: "payment_token_id" },
        ]
      },
      {
        name: "FK_4ED894655446D385894580BECA993862",
        using: "BTREE",
        fields: [
          { name: "payment_token_id" },
        ]
      },
    ]
  });
};
