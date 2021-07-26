const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WidgetInstancePage', {
    page_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Page ID"
    },
    instance_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Instance ID",
      references: {
        model: 'widget_instance',
        key: 'instance_id'
      }
    },
    page_group: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "Block Group Type"
    },
    layout_handle: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Layout Handle"
    },
    block_reference: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Container"
    },
    page_for: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "For instance entities"
    },
    entities: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Catalog entities (comma separated)"
    },
    page_template: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Path to widget template"
    }
  }, {
    sequelize,
    tableName: 'widget_instance_page',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "page_id" },
        ]
      },
      {
        name: "WIDGET_INSTANCE_PAGE_INSTANCE_ID",
        using: "BTREE",
        fields: [
          { name: "instance_id" },
        ]
      },
    ]
  });
};
