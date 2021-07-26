const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CoreConfigData', {
    config_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Config ID"
    },
    scope: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: "default",
      comment: "Config Scope"
    },
    scope_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Config Scope ID"
    },
    path: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "general",
      comment: "Config Path"
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Config Value"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Updated At"
    }
  }, {
    sequelize,
    tableName: 'core_config_data',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "config_id" },
        ]
      },
      {
        name: "CORE_CONFIG_DATA_SCOPE_SCOPE_ID_PATH",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "scope" },
          { name: "scope_id" },
          { name: "path" },
        ]
      },
    ]
  });
};
