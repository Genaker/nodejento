const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesruleCustomerGroup', {
    rule_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Rule ID",
      references: {
        model: 'salesrule',
        key: 'rule_id'
      }
    },
    customer_group_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Customer Group ID",
      references: {
        model: 'customer_group',
        key: 'customer_group_id'
      }
    }
  }, {
    sequelize,
    tableName: 'salesrule_customer_group',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rule_id" },
          { name: "customer_group_id" },
        ]
      },
      {
        name: "SALESRULE_CUSTOMER_GROUP_CUSTOMER_GROUP_ID",
        using: "BTREE",
        fields: [
          { name: "customer_group_id" },
        ]
      },
    ]
  });
};
