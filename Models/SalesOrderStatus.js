const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesOrderStatus', {
    status: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      comment: "Status"
    },
    label: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: "Label"
    }
  }, {
    sequelize,
    tableName: 'sales_order_status',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
    ]
  });
};
