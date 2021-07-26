const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DownloadableLinkPurchased', {
    purchased_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Purchased ID"
    },
    order_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "Order ID",
      references: {
        model: 'sales_order',
        key: 'entity_id'
      }
    },
    order_increment_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Order Increment ID"
    },
    order_item_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Order Item ID"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Date of creation"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Date of modification"
    },
    customer_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "Customer ID",
      references: {
        model: 'customer_entity',
        key: 'entity_id'
      }
    },
    product_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Product name"
    },
    product_sku: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Product sku"
    },
    link_section_title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Link_section_title"
    }
  }, {
    sequelize,
    tableName: 'downloadable_link_purchased',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "purchased_id" },
        ]
      },
      {
        name: "DOWNLOADABLE_LINK_PURCHASED_ORDER_ID",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "DOWNLOADABLE_LINK_PURCHASED_ORDER_ITEM_ID",
        using: "BTREE",
        fields: [
          { name: "order_item_id" },
        ]
      },
      {
        name: "DOWNLOADABLE_LINK_PURCHASED_CUSTOMER_ID",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
    ]
  });
};
