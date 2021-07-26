const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Widget', {
    widget_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Widget ID"
    },
    widget_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Widget code for template directive"
    },
    widget_type: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Widget Type"
    },
    parameters: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Parameters"
    }
  }, {
    sequelize,
    tableName: 'widget',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "widget_id" },
        ]
      },
      {
        name: "WIDGET_WIDGET_CODE",
        using: "BTREE",
        fields: [
          { name: "widget_code" },
        ]
      },
    ]
  });
};
