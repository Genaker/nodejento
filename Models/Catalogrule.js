const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Catalogrule', {
    rule_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Name"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Description"
    },
    from_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "From"
    },
    to_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "To"
    },
    is_active: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Active"
    },
    conditions_serialized: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Conditions Serialized"
    },
    actions_serialized: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Actions Serialized"
    },
    stop_rules_processing: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1,
      comment: "Stop Rules Processing"
    },
    sort_order: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Sort Order"
    },
    simple_action: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Simple Action"
    },
    discount_amount: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false,
      defaultValue: 0.000000,
      comment: "Discount Amount"
    }
  }, {
    sequelize,
    tableName: 'catalogrule',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rule_id" },
        ]
      },
      {
        name: "CATALOGRULE_IS_ACTIVE_SORT_ORDER_TO_DATE_FROM_DATE",
        using: "BTREE",
        fields: [
          { name: "is_active" },
          { name: "sort_order" },
          { name: "to_date" },
          { name: "from_date" },
        ]
      },
    ]
  });
};
