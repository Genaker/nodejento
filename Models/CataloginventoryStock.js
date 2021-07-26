const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CataloginventoryStock', {
    stock_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Stock ID"
    },
    website_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      comment: "Website ID"
    },
    stock_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Stock Name"
    }
  }, {
    sequelize,
    tableName: 'cataloginventory_stock',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "stock_id" },
        ]
      },
      {
        name: "CATALOGINVENTORY_STOCK_WEBSITE_ID",
        using: "BTREE",
        fields: [
          { name: "website_id" },
        ]
      },
    ]
  });
};
