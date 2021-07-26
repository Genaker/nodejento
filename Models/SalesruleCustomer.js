const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesruleCustomer', {
    rule_customer_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Rule Customer ID"
    },
    rule_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Rule ID",
      references: {
        model: 'salesrule',
        key: 'rule_id'
      }
    },
    customer_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Customer ID",
      references: {
        model: 'customer_entity',
        key: 'entity_id'
      }
    },
    times_used: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Times Used"
    }
  }, {
    sequelize,
    tableName: 'salesrule_customer',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rule_customer_id" },
        ]
      },
      {
        name: "SALESRULE_CUSTOMER_RULE_ID_CUSTOMER_ID",
        using: "BTREE",
        fields: [
          { name: "rule_id" },
          { name: "customer_id" },
        ]
      },
      {
        name: "SALESRULE_CUSTOMER_CUSTOMER_ID_RULE_ID",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
          { name: "rule_id" },
        ]
      },
    ]
  });
};
