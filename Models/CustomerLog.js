const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CustomerLog', {
    log_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Log ID"
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Customer ID",
      unique: "CUSTOMER_LOG_CUSTOMER_ID"
    },
    last_login_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Last Login Time"
    },
    last_logout_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Last Logout Time"
    }
  }, {
    sequelize,
    tableName: 'customer_log',
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
        name: "CUSTOMER_LOG_CUSTOMER_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
    ]
  });
};
