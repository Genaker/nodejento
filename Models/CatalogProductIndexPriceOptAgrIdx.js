const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductIndexPriceOptAgrIdx', {
    entity_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    customer_group_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "Customer Group ID"
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
    min_price: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      comment: "Min Price"
    },
    max_price: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      comment: "Max Price"
    },
    tier_price: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      comment: "Tier Price"
    }
  }, {
    sequelize,
    tableName: 'catalog_product_index_price_opt_agr_idx',
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
        ]
      },
    ]
  });
};
