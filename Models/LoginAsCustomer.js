const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LoginAsCustomer', {
    secret: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      comment: "Login Secret"
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Customer ID"
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Admin ID"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Creation Time"
    }
  }, {
    sequelize,
    tableName: 'login_as_customer',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "secret" },
        ]
      },
      {
        name: "LOGIN_AS_CUSTOMER_CREATED_AT",
        using: "BTREE",
        fields: [
          { name: "created_at" },
        ]
      },
    ]
  });
};
