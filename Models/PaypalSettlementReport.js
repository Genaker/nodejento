const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PaypalSettlementReport', {
    report_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Report ID"
    },
    report_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Report Date"
    },
    account_id: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "Account ID"
    },
    filename: {
      type: DataTypes.STRING(24),
      allowNull: true,
      comment: "Filename"
    },
    last_modified: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Last Modified"
    }
  }, {
    sequelize,
    tableName: 'paypal_settlement_report',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "report_id" },
        ]
      },
      {
        name: "PAYPAL_SETTLEMENT_REPORT_REPORT_DATE_ACCOUNT_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "report_date" },
          { name: "account_id" },
        ]
      },
    ]
  });
};
