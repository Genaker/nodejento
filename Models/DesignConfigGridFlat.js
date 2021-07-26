const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DesignConfigGridFlat', {
    entity_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    store_website_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Store_website_id"
    },
    store_group_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Store_group_id"
    },
    store_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Store_id"
    },
    theme_theme_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Theme_theme_id"
    }
  }, {
    sequelize,
    tableName: 'design_config_grid_flat',
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
        name: "DESIGN_CONFIG_GRID_FLAT_STORE_WEBSITE_ID",
        using: "BTREE",
        fields: [
          { name: "store_website_id" },
        ]
      },
      {
        name: "DESIGN_CONFIG_GRID_FLAT_STORE_GROUP_ID",
        using: "BTREE",
        fields: [
          { name: "store_group_id" },
        ]
      },
      {
        name: "DESIGN_CONFIG_GRID_FLAT_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
      {
        name: "DESIGN_CONFIG_GRID_FLAT_THEME_THEME_ID",
        type: "FULLTEXT",
        fields: [
          { name: "theme_theme_id" },
        ]
      },
    ]
  });
};
