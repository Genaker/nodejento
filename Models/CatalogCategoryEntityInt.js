const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogCategoryEntityInt', {
    value_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Value ID"
    },
    attribute_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Attribute ID",
      references: {
        model: 'eav_attribute',
        key: 'attribute_id'
      }
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
      }
    },
    entity_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Entity ID",
      references: {
        model: 'catalog_category_entity',
        key: 'entity_id'
      }
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Value"
    }
  }, {
    sequelize,
    tableName: 'catalog_category_entity_int',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "value_id" },
        ]
      },
      {
        name: "CATALOG_CATEGORY_ENTITY_INT_ENTITY_ID_ATTRIBUTE_ID_STORE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "entity_id" },
          { name: "attribute_id" },
          { name: "store_id" },
        ]
      },
      {
        name: "CATALOG_CATEGORY_ENTITY_INT_ENTITY_ID",
        using: "BTREE",
        fields: [
          { name: "entity_id" },
        ]
      },
      {
        name: "CATALOG_CATEGORY_ENTITY_INT_ATTRIBUTE_ID",
        using: "BTREE",
        fields: [
          { name: "attribute_id" },
        ]
      },
      {
        name: "CATALOG_CATEGORY_ENTITY_INT_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
