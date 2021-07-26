const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CustomerGroup', {
    customer_group_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    customer_group_code: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "Customer Group Code"
    },
    tax_class_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Tax Class ID"
    }
  }, {
    sequelize,
    tableName: 'customer_group',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "customer_group_id" },
        ]
      },
    ]
  });
};
