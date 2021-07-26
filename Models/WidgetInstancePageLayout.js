const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WidgetInstancePageLayout', {
    page_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Page ID",
      references: {
        model: 'widget_instance_page',
        key: 'page_id'
      }
    },
    layout_update_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Layout Update ID",
      references: {
        model: 'layout_update',
        key: 'layout_update_id'
      }
    }
  }, {
    sequelize,
    tableName: 'widget_instance_page_layout',
    timestamps: false,
    indexes: [
      {
        name: "WIDGET_INSTANCE_PAGE_LAYOUT_LAYOUT_UPDATE_ID_PAGE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "layout_update_id" },
          { name: "page_id" },
        ]
      },
      {
        name: "WIDGET_INSTANCE_PAGE_LAYOUT_PAGE_ID",
        using: "BTREE",
        fields: [
          { name: "page_id" },
        ]
      },
    ]
  });
};
