const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductRelation', {
    parent_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Parent ID",
      references: {
        model: 'catalog_product_entity',
        key: 'entity_id'
      }
    },
    child_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Child ID",
      references: {
        model: 'catalog_product_entity',
        key: 'entity_id'
      }
    }
  }, {
    sequelize,
    tableName: 'catalog_product_relation',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "parent_id" },
          { name: "child_id" },
        ]
      },
      {
        name: "CATALOG_PRODUCT_RELATION_CHILD_ID",
        using: "BTREE",
        fields: [
          { name: "child_id" },
        ]
      },
    ]
  });
};
