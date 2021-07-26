const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductIndexPriceBundleSelIdx', {
    entity_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    customer_group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    website_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Website ID"
    },
    option_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "Option ID"
    },
    selection_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "Selection ID"
    },
    group_type: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "Group Type"
    },
    is_required: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "Is Required"
    },
    price: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      comment: "Price"
    },
    tier_price: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      comment: "Tier Price"
    }
  }, {
    sequelize,
    tableName: 'catalog_product_index_price_bundle_sel_idx',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "entity_id" },
          { name: "customer_group_id" },
          { name: "website_id" },
          { name: "option_id" },
          { name: "selection_id" },
        ]
      },
    ]
  });
};
