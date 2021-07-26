const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesOrderStatusLabel', {
    status: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      comment: "Status",
      references: {
        model: 'sales_order_status',
        key: 'status'
      }
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
      }
    },
    label: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: "Label"
    }
  }, {
    sequelize,
    tableName: 'sales_order_status_label',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "status" },
          { name: "store_id" },
        ]
      },
      {
        name: "SALES_ORDER_STATUS_LABEL_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
