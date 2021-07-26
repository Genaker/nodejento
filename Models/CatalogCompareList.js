const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogCompareList', {
    list_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Compare List ID"
    },
    list_id_mask: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Masked ID"
    },
    customer_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Customer ID",
      references: {
        model: 'customer_entity',
        key: 'entity_id'
      },
      unique: "CATALOG_COMPARE_LIST_CUSTOMER_ID_CUSTOMER_ENTITY_ENTITY_ID"
    }
  }, {
    sequelize,
    tableName: 'catalog_compare_list',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "list_id" },
        ]
      },
      {
        name: "CATALOG_COMPARE_LIST_CUSTOMER_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "CATALOG_COMPARE_LIST_LIST_ID_MASK",
        using: "BTREE",
        fields: [
          { name: "list_id_mask" },
        ]
      },
    ]
  });
};
