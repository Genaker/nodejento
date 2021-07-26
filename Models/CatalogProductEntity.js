const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductEntity', {
    entity_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    attribute_set_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Attribute Set ID"
    },
    type_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "simple",
      comment: "Type ID"
    },
    sku: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "SKU"
    },
    has_options: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Has Options"
    },
    required_options: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Required Options"
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
    tableName: 'catalog_product_entity',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "entity_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_ENTITY_ATTRIBUTE_SET_ID",
        using: "BTREE",
        fields: [
          { name: "attribute_set_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_ENTITY_SKU",
        using: "BTREE",
        fields: [
          { name: "sku" },
        ]
      },
    ]
  });
};
