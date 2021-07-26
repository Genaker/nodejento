const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogEavAttribute', {
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
    frontend_input_renderer: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Frontend Input Renderer"
    },
    is_global: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "Is Global"
    },
    is_visible: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "Is Visible"
    },
    is_searchable: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Searchable"
    },
    is_filterable: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Filterable"
    },
    is_comparable: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Comparable"
    },
    is_visible_on_front: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Visible On Front"
    },
    is_html_allowed_on_front: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is HTML Allowed On Front"
    },
    is_used_for_price_rules: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Used For Price Rules"
    },
    is_filterable_in_search: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Filterable In Search"
    },
    used_in_product_listing: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Used In Product Listing"
    },
    used_for_sort_by: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Used For Sorting"
    },
    apply_to: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Apply To"
    },
    is_visible_in_advanced_search: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Visible In Advanced Search"
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Position"
    },
    is_wysiwyg_enabled: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is WYSIWYG Enabled"
    },
    is_used_for_promo_rules: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Used For Promo Rules"
    },
    is_required_in_admin_store: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Required In Admin Store"
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
    search_weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 1,
      comment: "Search Weight"
    },
    additional_data: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Additional swatch attributes data"
    }
  }, {
    sequelize,
    tableName: 'catalog_eav_attribute',
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
        name: "CATALOG_EAV_ATTRIBUTE_USED_FOR_SORT_BY",
        using: "BTREE",
        fields: [
          { name: "used_for_sort_by" },
        ]
      },
      {
        name: "CATALOG_EAV_ATTRIBUTE_USED_IN_PRODUCT_LISTING",
        using: "BTREE",
        fields: [
          { name: "used_in_product_listing" },
        ]
      },
    ]
  });
};
