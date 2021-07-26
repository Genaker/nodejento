const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesruleLabel', {
    label_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Label ID"
    },
    rule_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Rule ID",
      references: {
        model: 'salesrule',
        key: 'rule_id'
      }
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
      }
    },
    label: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Label"
    }
  }, {
    sequelize,
    tableName: 'salesrule_label',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "label_id" },
        ]
      },
      {
        name: "SALESRULE_LABEL_RULE_ID_STORE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rule_id" },
          { name: "store_id" },
        ]
      },
      {
        name: "SALESRULE_LABEL_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
