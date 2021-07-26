const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DownloadableSample', {
    sample_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Sample ID"
    },
    product_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Product ID",
      references: {
        model: 'catalog_product_entity',
        key: 'entity_id'
      }
    },
    sample_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Sample URL"
    },
    sample_file: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Sample file"
    },
    sample_type: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "Sample Type"
    },
    sort_order: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Sort Order"
    }
  }, {
    sequelize,
    tableName: 'downloadable_sample',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sample_id" },
        ]
      },
      {
        name: "DOWNLOADABLE_SAMPLE_PRODUCT_ID",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
};
