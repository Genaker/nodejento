const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MagentoLoginAsCustomerLog', {
    log_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Log Id"
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Event Date"
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "User Id"
    },
    user_name: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "User Name"
    },
    customer_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Customer Id"
    },
    customer_email: {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "Customer email"
    }
  }, {
    sequelize,
    tableName: 'magento_login_as_customer_log',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "log_id" },
        ]
      },
      {
        name: "MAGENTO_LOGIN_AS_CUSTOMER_LOG_USER_ID",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
