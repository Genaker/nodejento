const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CataloginventoryStockItem', {
    item_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Item ID"
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
    stock_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Stock ID",
      references: {
        model: 'cataloginventory_stock',
        key: 'stock_id'
      }
    },
    qty: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Qty"
    },
    min_qty: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Min Qty"
    },
    use_config_min_qty: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "Use Config Min Qty"
    },
    is_qty_decimal: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Qty Decimal"
    },
    backorders: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Backorders"
    },
    use_config_backorders: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "Use Config Backorders"
    },
    min_sale_qty: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: false,
      defaultValue: 1.0000,
      comment: "Min Sale Qty"
    },
    use_config_min_sale_qty: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "Use Config Min Sale Qty"
    },
    max_sale_qty: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Max Sale Qty"
    },
    use_config_max_sale_qty: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "Use Config Max Sale Qty"
    },
    is_in_stock: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is In Stock"
    },
    low_stock_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Low Stock Date"
    },
    notify_stock_qty: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      comment: "Notify Stock Qty"
    },
    use_config_notify_stock_qty: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "Use Config Notify Stock Qty"
    },
    manage_stock: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Manage Stock"
    },
    use_config_manage_stock: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "Use Config Manage Stock"
    },
    stock_status_changed_auto: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Stock Status Changed Automatically"
    },
    use_config_qty_increments: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "Use Config Qty Increments"
    },
    qty_increments: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: false,
      defaultValue: 0.0000,
      comment: "Qty Increments"
    },
    use_config_enable_qty_inc: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "Use Config Enable Qty Increments"
    },
    enable_qty_increments: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Enable Qty Increments"
    },
    is_decimal_divided: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Divided into Multiple Boxes for Shipping"
    },
    website_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Website ID"
    }
  }, {
    sequelize,
    tableName: 'cataloginventory_stock_item',
    hasTrigger: true,
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
        name: "CATALOGINVENTORY_STOCK_ITEM_PRODUCT_ID_STOCK_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_id" },
          { name: "stock_id" },
        ]
      },
      {
        name: "CATALOGINVENTORY_STOCK_ITEM_WEBSITE_ID",
        using: "BTREE",
        fields: [
          { name: "website_id" },
        ]
      },
      {
        name: "CATALOGINVENTORY_STOCK_ITEM_WEBSITE_ID_PRODUCT_ID",
        using: "BTREE",
        fields: [
          { name: "website_id" },
          { name: "product_id" },
        ]
      },
      {
        name: "CATALOGINVENTORY_STOCK_ITEM_STOCK_ID",
        using: "BTREE",
        fields: [
          { name: "stock_id" },
        ]
      },
    ]
  });
};
