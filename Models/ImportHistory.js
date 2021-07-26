const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ImportHistory', {
    history_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "History record ID"
    },
    started_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Started at"
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "User ID"
    },
    imported_file: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Imported file"
    },
    execution_time: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Execution time"
    },
    summary: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Summary"
    },
    error_file: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Imported file with errors"
    }
  }, {
    sequelize,
    tableName: 'import_history',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "history_id" },
        ]
      },
    ]
  });
};
