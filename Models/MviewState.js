const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MviewState', {
    state_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "View State ID"
    },
    view_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "View ID"
    },
    mode: {
      type: DataTypes.STRING(16),
      allowNull: true,
      defaultValue: "disabled",
      comment: "View Mode"
    },
    status: {
      type: DataTypes.STRING(16),
      allowNull: true,
      defaultValue: "idle",
      comment: "View Status"
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "View updated time"
    },
    version_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "View Version ID"
    }
  }, {
    sequelize,
    tableName: 'mview_state',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "state_id" },
        ]
      },
      {
        name: "MVIEW_STATE_VIEW_ID",
        using: "BTREE",
        fields: [
          { name: "view_id" },
        ]
      },
      {
        name: "MVIEW_STATE_MODE",
        using: "BTREE",
        fields: [
          { name: "mode" },
        ]
      },
    ]
  });
};
