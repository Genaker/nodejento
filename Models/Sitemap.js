const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Sitemap', {
    sitemap_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Sitemap ID"
    },
    sitemap_type: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Sitemap Type"
    },
    sitemap_filename: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Sitemap Filename"
    },
    sitemap_path: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Sitemap Path"
    },
    sitemap_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Sitemap Time"
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
      }
    }
  }, {
    sequelize,
    tableName: 'sitemap',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sitemap_id" },
        ]
      },
      {
        name: "SITEMAP_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
