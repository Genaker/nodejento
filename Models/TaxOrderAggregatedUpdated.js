const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TaxOrderAggregatedUpdated', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "ID"
    },
    period: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Period"
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
      }
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Code"
    },
    order_status: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Order Status"
    },
    percent: {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "Percent"
    },
    orders_count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Orders Count"
    },
    tax_base_amount_sum: {
      type: DataTypes.FLOAT,
      allowNull: true,
      comment: "Tax Base Amount Sum"
    }
  }, {
    sequelize,
    tableName: 'tax_order_aggregated_updated',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "TAX_ORDER_AGGRED_UPDATED_PERIOD_STORE_ID_CODE_PERCENT_ORDER_STS",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "period" },
          { name: "store_id" },
          { name: "code" },
          { name: "percent" },
          { name: "order_status" },
        ]
      },
      {
        name: "TAX_ORDER_AGGREGATED_UPDATED_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
