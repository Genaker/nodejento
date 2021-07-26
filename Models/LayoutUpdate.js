const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LayoutUpdate', {
    layout_update_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Layout Update ID"
    },
    handle: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Handle"
    },
    xml: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Xml"
    },
    sort_order: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Sort Order"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "0000-00-00 00:00:00",
      comment: "Last Update Timestamp"
    }
  }, {
    sequelize,
    tableName: 'layout_update',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "layout_update_id" },
        ]
      },
      {
        name: "LAYOUT_UPDATE_HANDLE",
        using: "BTREE",
        fields: [
          { name: "handle" },
        ]
      },
    ]
  });
};
