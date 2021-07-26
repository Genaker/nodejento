const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductFrontendAction', {
    action_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Product Action ID"
    },
    type_id: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "Type of product action"
    },
    visitor_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Visitor ID"
    },
    customer_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Customer ID",
      references: {
        model: 'customer_entity',
        key: 'entity_id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Product ID",
      references: {
        model: 'catalog_product_entity',
        key: 'entity_id'
      }
    },
    added_at: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: "Added At"
    }
  }, {
    sequelize,
    tableName: 'catalog_product_frontend_action',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "action_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_FRONTEND_ACTION_VISITOR_ID_PRODUCT_ID_TYPE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "visitor_id" },
          { name: "product_id" },
          { name: "type_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_FRONTEND_ACTION_CUSTOMER_ID_PRODUCT_ID_TYPE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "customer_id" },
          { name: "product_id" },
          { name: "type_id" },
        ]
      },
      {
        name: "CAT_PRD_FRONTEND_ACTION_PRD_ID_CAT_PRD_ENTT_ENTT_ID",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
};
