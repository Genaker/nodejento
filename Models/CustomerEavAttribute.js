const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CustomerEavAttribute', {
    attribute_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Attribute ID",
      references: {
        model: 'eav_attribute',
        key: 'attribute_id'
      }
    },
    is_visible: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "Is Visible"
    },
    input_filter: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Input Filter"
    },
    multiline_count: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "Multiline Count"
    },
    validate_rules: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Validate Rules"
    },
    is_system: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is System"
    },
    sort_order: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Sort Order"
    },
    data_model: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Data Model"
    },
    is_used_in_grid: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Used in Grid"
    },
    is_visible_in_grid: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Visible in Grid"
    },
    is_filterable_in_grid: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Filterable in Grid"
    },
    is_searchable_in_grid: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Searchable in Grid"
    }
  }, {
    sequelize,
    tableName: 'customer_eav_attribute',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "attribute_id" },
        ]
      },
      {
        name: "CUSTOMER_EAV_ATTRIBUTE_SORT_ORDER",
        using: "BTREE",
        fields: [
          { name: "sort_order" },
        ]
      },
    ]
  });
};
