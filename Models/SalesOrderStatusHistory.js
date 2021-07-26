const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesOrderStatusHistory', {
    entity_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    parent_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Parent ID",
      references: {
        model: 'sales_order',
        key: 'entity_id'
      }
    },
    is_customer_notified: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Is Customer Notified"
    },
    is_visible_on_front: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Visible On Front"
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Comment"
    },
    status: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Status"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Created At"
    },
    entity_name: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Shows what entity history is bind to."
    }
  }, {
    sequelize,
    tableName: 'sales_order_status_history',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "entity_id" },
        ]
      },
      {
        name: "SALES_ORDER_STATUS_HISTORY_PARENT_ID",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
      {
        name: "SALES_ORDER_STATUS_HISTORY_CREATED_AT",
        using: "BTREE",
        fields: [
          { name: "created_at" },
        ]
      },
    ]
  });
};
