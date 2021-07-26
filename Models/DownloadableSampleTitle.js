const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DownloadableSampleTitle', {
    title_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Title ID"
    },
    sample_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Sample ID",
      references: {
        model: 'downloadable_sample',
        key: 'sample_id'
      }
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
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Title"
    }
  }, {
    sequelize,
    tableName: 'downloadable_sample_title',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "title_id" },
        ]
      },
      {
        name: "DOWNLOADABLE_SAMPLE_TITLE_SAMPLE_ID_STORE_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sample_id" },
          { name: "store_id" },
        ]
      },
      {
        name: "DOWNLOADABLE_SAMPLE_TITLE_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
