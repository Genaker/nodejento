const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DownloadableLinkPurchasedItem', {
    item_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Item ID"
    },
    purchased_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Purchased ID",
      references: {
        model: 'downloadable_link_purchased',
        key: 'purchased_id'
      }
    },
    order_item_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "Order Item ID",
      references: {
        model: 'sales_order_item',
        key: 'item_id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "Product ID"
    },
    link_hash: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Link hash"
    },
    number_of_downloads_bought: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Number of downloads bought"
    },
    number_of_downloads_used: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Number of downloads used"
    },
    link_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Link ID"
    },
    link_title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Link Title"
    },
    is_shareable: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Shareable Flag"
    },
    link_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Link Url"
    },
    link_file: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Link File"
    },
    link_type: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Link Type"
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Status"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Creation Time"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Update Time"
    }
  }, {
    sequelize,
    tableName: 'downloadable_link_purchased_item',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "item_id" },
        ]
      },
      {
        name: "DOWNLOADABLE_LINK_PURCHASED_ITEM_LINK_HASH",
        using: "BTREE",
        fields: [
          { name: "link_hash" },
        ]
      },
      {
        name: "DOWNLOADABLE_LINK_PURCHASED_ITEM_ORDER_ITEM_ID",
        using: "BTREE",
        fields: [
          { name: "order_item_id" },
        ]
      },
      {
        name: "DOWNLOADABLE_LINK_PURCHASED_ITEM_PURCHASED_ID",
        using: "BTREE",
        fields: [
          { name: "purchased_id" },
        ]
      },
    ]
  });
};
