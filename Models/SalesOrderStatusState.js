const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesOrderStatusState', {
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
    state: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true,
      comment: "Label"
    },
    is_default: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Default"
    },
    visible_on_front: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Visible on front"
    }
  }, {
    sequelize,
    tableName: 'sales_order_status_state',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "status" },
          { name: "state" },
        ]
      },
    ]
  });
};
