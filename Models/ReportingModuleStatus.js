const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReportingModuleStatus', {
    entity_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Module ID"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Module Name"
    },
    active: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Module Active Status"
    },
    setup_version: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Module Version"
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Module State"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Updated At"
    }
  }, {
    sequelize,
    tableName: 'reporting_module_status',
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
    ]
  });
};
