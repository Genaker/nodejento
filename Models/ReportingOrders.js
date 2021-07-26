const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReportingOrders', {
    entity_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    customer_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Customer ID"
    },
    total: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true
    },
    total_base: {
      type: DataTypes.DECIMAL(20,4),
      allowNull: true
    },
    item_count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Line Item Count"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Updated At"
    }
  }, {
    sequelize,
    tableName: 'reporting_orders',
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
    ]
  });
};
