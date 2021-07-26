const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PaypalBillingAgreement', {
    agreement_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Agreement ID"
    },
    customer_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Customer ID",
      references: {
        model: 'customer_entity',
        key: 'entity_id'
      }
    },
    method_code: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "Method Code"
    },
    reference_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "Reference ID"
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "Status"
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
      comment: "Updated At"
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
      }
    },
    agreement_label: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Agreement Label"
    }
  }, {
    sequelize,
    tableName: 'paypal_billing_agreement',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "agreement_id" },
        ]
      },
      {
        name: "PAYPAL_BILLING_AGREEMENT_CUSTOMER_ID",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "PAYPAL_BILLING_AGREEMENT_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
