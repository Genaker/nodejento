const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PaypalBillingAgreementOrder', {
    agreement_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Agreement ID",
      references: {
        model: 'paypal_billing_agreement',
        key: 'agreement_id'
      }
    },
    order_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Order ID",
      references: {
        model: 'sales_order',
        key: 'entity_id'
      }
    }
  }, {
    sequelize,
    tableName: 'paypal_billing_agreement_order',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "agreement_id" },
          { name: "order_id" },
        ]
      },
      {
        name: "PAYPAL_BILLING_AGREEMENT_ORDER_ORDER_ID",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
    ]
  });
};
