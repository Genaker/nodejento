const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogProductLinkType', {
    link_type_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Link Type ID"
    },
    code: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Code"
    }
  }, {
    sequelize,
    tableName: 'catalog_product_link_type',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "link_type_id" },
        ]
      },
    ]
  });
};
