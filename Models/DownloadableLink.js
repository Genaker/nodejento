const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DownloadableLink', {
    link_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Link ID"
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
    sort_order: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Sort order"
    },
    number_of_downloads: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Number of downloads"
    },
    is_shareable: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Shareable flag"
    },
    link_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Link Url"
    },
    link_file: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Link File"
    },
    link_type: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "Link Type"
    },
    sample_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Sample Url"
    },
    sample_file: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Sample File"
    },
    sample_type: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "Sample Type"
    }
  }, {
    sequelize,
    tableName: 'downloadable_link',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "link_id" },
        ]
      },
      {
        name: "DOWNLOADABLE_LINK_PRODUCT_ID_SORT_ORDER",
        using: "BTREE",
        fields: [
          { name: "product_id" },
          { name: "sort_order" },
        ]
      },
    ]
  });
};
