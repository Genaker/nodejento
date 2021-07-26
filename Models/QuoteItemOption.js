const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QuoteItemOption', {
    option_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Option ID"
    },
    item_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Item ID",
      references: {
        model: 'quote_item',
        key: 'item_id'
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
    tableName: 'quote_item_option',
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
        name: "QUOTE_ITEM_OPTION_ITEM_ID",
        using: "BTREE",
        fields: [
          { name: "item_id" },
        ]
      },
    ]
  });
};
