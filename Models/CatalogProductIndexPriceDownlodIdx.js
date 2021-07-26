const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductIndexPriceDownlodIdx', {
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
    min_price: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false,
      defaultValue: 0.000000,
      comment: "Minimum price"
    },
    max_price: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false,
      defaultValue: 0.000000,
      comment: "Maximum price"
    }
  }, {
    sequelize,
    tableName: 'catalog_product_index_price_downlod_idx',
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
        ]
      },
    ]
  });
};
