const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Salesrule', {
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
    uses_per_customer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Uses Per Customer"
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
    is_advanced: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "Is Advanced"
    },
    product_ids: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Product Ids"
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
      type: DataTypes.DECIMAL(12,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Discount Amount"
    },
    discount_qty: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Discount Qty"
    },
    discount_step: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Discount Step"
    },
    apply_to_shipping: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Apply To Shipping"
    },
    times_used: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Times Used"
    },
    is_rss: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Rss"
    },
    coupon_type: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "Coupon Type"
    },
    use_auto_generation: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Use Auto Generation"
    },
    uses_per_coupon: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "User Per Coupon"
    },
    simple_free_shipping: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Simple Free Shipping"
    }
  }, {
    sequelize,
    tableName: 'salesrule',
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
        name: "SALESRULE_IS_ACTIVE_SORT_ORDER_TO_DATE_FROM_DATE",
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
