const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WidgetInstance', {
    instance_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Instance ID"
    },
    instance_type: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Instance Type"
    },
    theme_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Theme ID",
      references: {
        model: 'theme',
        key: 'theme_id'
      }
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Widget Title"
    },
    store_ids: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "0",
      comment: "Store ids"
    },
    widget_parameters: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Widget parameters"
    },
    sort_order: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Sort order"
    }
  }, {
    sequelize,
    tableName: 'widget_instance',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "instance_id" },
        ]
      },
      {
        name: "WIDGET_INSTANCE_THEME_ID_THEME_THEME_ID",
        using: "BTREE",
        fields: [
          { name: "theme_id" },
        ]
      },
    ]
  });
};
