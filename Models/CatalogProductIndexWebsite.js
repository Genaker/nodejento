const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductIndexWebsite', {
    website_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Website ID",
      references: {
        model: 'store_website',
        key: 'website_id'
      }
    },
    default_store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      comment: "Default store ID for website"
    },
    website_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Website Date"
    },
    rate: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 1,
      comment: "Rate"
    }
  }, {
    sequelize,
    tableName: 'catalog_product_index_website',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "website_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_INDEX_WEBSITE_WEBSITE_DATE",
        using: "BTREE",
        fields: [
          { name: "website_date" },
        ]
      },
    ]
  });
};
