const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogCategoryEntity', {
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
    parent_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Parent Category ID"
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
    },
    path: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Tree Path"
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Position"
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Tree Level"
    },
    children_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Child Count"
    }
  }, {
    sequelize,
    tableName: 'catalog_category_entity',
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
        name: "CATALOG_CATEGORY_ENTITY_LEVEL",
        using: "BTREE",
        fields: [
          { name: "level" },
        ]
      },
      {
        name: "CATALOG_CATEGORY_ENTITY_PATH",
        using: "BTREE",
        fields: [
          { name: "path" },
        ]
      },
    ]
  });
};
