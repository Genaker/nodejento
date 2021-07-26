const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ThemeFile', {
    theme_files_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Theme files identifier"
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
    file_path: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Relative path to file"
    },
    file_type: {
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "File Type"
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "File Content"
    },
    sort_order: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Sort Order"
    },
    is_temporary: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Temporary File"
    }
  }, {
    sequelize,
    tableName: 'theme_file',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "theme_files_id" },
        ]
      },
      {
        name: "THEME_FILE_THEME_ID_THEME_THEME_ID",
        using: "BTREE",
        fields: [
          { name: "theme_id" },
        ]
      },
    ]
  });
};
