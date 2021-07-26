const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesOrderTax', {
    tax_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Tax ID"
    },
    order_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Order ID"
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Code"
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Title"
    },
    percent: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Percent"
    },
    amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Amount"
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Priority"
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Position"
    },
    base_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Amount"
    },
    process: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "Process"
    },
    base_real_amount: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true,
      comment: "Base Real Amount"
    }
  }, {
    sequelize,
    tableName: 'sales_order_tax',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tax_id" },
        ]
      },
      {
        name: "SALES_ORDER_TAX_ORDER_ID_PRIORITY_POSITION",
        using: "BTREE",
        fields: [
          { name: "order_id" },
          { name: "priority" },
          { name: "position" },
        ]
      },
    ]
  });
};
