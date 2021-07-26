const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WishlistItemOption', {
    option_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Option ID"
    },
    wishlist_item_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Wishlist Item ID",
      references: {
        model: 'wishlist_item',
        key: 'wishlist_item_id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Product ID"
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Code"
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Value"
    }
  }, {
    sequelize,
    tableName: 'wishlist_item_option',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "option_id" },
        ]
      },
      {
        name: "FK_A014B30B04B72DD0EAB3EECD779728D6",
        using: "BTREE",
        fields: [
          { name: "wishlist_item_id" },
        ]
      },
    ]
  });
};
