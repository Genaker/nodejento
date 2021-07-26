const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Theme', {
    theme_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Theme identifier"
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Parent ID"
    },
    theme_path: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Theme Path"
    },
    theme_title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Theme Title"
    },
    preview_image: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Preview Image"
    },
    is_featured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Theme Featured"
    },
    area: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Theme Area"
    },
    type: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "Theme type: 0:physical, 1:virtual, 2:staging"
    },
    code: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Full theme code, including package"
    }
  }, {
    sequelize,
    tableName: 'theme',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "theme_id" },
        ]
      },
    ]
  });
};
