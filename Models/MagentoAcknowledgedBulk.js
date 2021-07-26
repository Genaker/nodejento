const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MagentoAcknowledgedBulk', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Internal ID"
    },
    bulk_uuid: {
      type: DataTypes.BLOB,
      allowNull: true,
      comment: "Related Bulk UUID",
      references: {
        model: 'magento_bulk',
        key: 'uuid'
      },
      unique: "MAGENTO_ACKNOWLEDGED_BULK_BULK_UUID_MAGENTO_BULK_UUID"
    }
  }, {
    sequelize,
    tableName: 'magento_acknowledged_bulk',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "MAGENTO_ACKNOWLEDGED_BULK_BULK_UUID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bulk_uuid" },
        ]
      },
    ]
  });
};
