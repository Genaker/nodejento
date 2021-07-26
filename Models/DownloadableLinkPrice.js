const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DownloadableLinkPrice', {
    price_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Price ID"
    },
    link_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Link ID",
      references: {
        model: 'downloadable_link',
        key: 'link_id'
      }
    },
    website_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Website ID",
      references: {
        model: 'store_website',
        key: 'website_id'
      }
    },
    price: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false,
      defaultValue: 0.000000,
      comment: "Price"
    }
  }, {
    sequelize,
    tableName: 'downloadable_link_price',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "price_id" },
        ]
      },
      {
        name: "DOWNLOADABLE_LINK_PRICE_LINK_ID",
        using: "BTREE",
        fields: [
          { name: "link_id" },
        ]
      },
      {
        name: "DOWNLOADABLE_LINK_PRICE_WEBSITE_ID",
        using: "BTREE",
        fields: [
          { name: "website_id" },
        ]
      },
    ]
  });
};
