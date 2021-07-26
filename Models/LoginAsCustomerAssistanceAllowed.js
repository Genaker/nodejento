const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LoginAsCustomerAssistanceAllowed', {
    customer_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Customer ID",
      references: {
        model: 'customer_entity',
        key: 'entity_id'
      }
    }
  }, {
    sequelize,
    tableName: 'login_as_customer_assistance_allowed',
    timestamps: false,
    indexes: [
      {
        name: "LOGIN_AS_CUSTOMER_ASSISTANCE_ALLOWED_CUSTOMER_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
    ]
  });
};
