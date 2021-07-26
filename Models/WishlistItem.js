const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WishlistItem', {
    wishlist_item_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Wishlist item ID"
    },
    wishlist_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Wishlist ID",
      references: {
        model: 'wishlist',
        key: 'wishlist_id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Product ID",
      references: {
        model: 'catalog_product_entity',
        key: 'entity_id'
      }
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
      }
    },
    added_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Add date and time"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Short description of wish list item"
    },
    qty: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: false,
      comment: "Qty"
    }
  }, {
    sequelize,
    tableName: 'wishlist_item',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "wishlist_item_id" },
        ]
      },
      {
        name: "WISHLIST_ITEM_WISHLIST_ID",
        using: "BTREE",
        fields: [
          { name: "wishlist_id" },
        ]
      },
      {
        name: "WISHLIST_ITEM_PRODUCT_ID",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "WISHLIST_ITEM_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
