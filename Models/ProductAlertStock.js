const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProductAlertStock', {
    alert_stock_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Product alert stock ID"
    },
    customer_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Customer ID",
      references: {
        model: 'customer_entity',
        key: 'entity_id'
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
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
      }
    },
    add_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Product alert add date"
    },
    send_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Product alert send date"
    },
    send_count: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Send Count"
    },
    status: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Product alert status"
    }
  }, {
    sequelize,
    tableName: 'product_alert_stock',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "alert_stock_id" },
        ]
      },
      {
        name: "PRODUCT_ALERT_STOCK_CUSTOMER_ID",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "PRODUCT_ALERT_STOCK_PRODUCT_ID",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "PRODUCT_ALERT_STOCK_WEBSITE_ID",
        using: "BTREE",
        fields: [
          { name: "website_id" },
        ]
      },
      {
        name: "PRODUCT_ALERT_STOCK_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
