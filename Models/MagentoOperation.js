const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MagentoOperation', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Operation ID"
    },
    operation_key: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Operation Key"
    },
    bulk_uuid: {
      type: DataTypes.BLOB,
      allowNull: true,
      comment: "Related Bulk UUID",
      references: {
        model: 'magento_bulk',
        key: 'uuid'
      }
    },
    topic_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Name of the related message queue topic"
    },
    serialized_data: {
      type: DataTypes.BLOB,
      allowNull: true,
      comment: "Data (serialized) required to perform an operation"
    },
    result_serialized_data: {
      type: DataTypes.BLOB,
      allowNull: true,
      comment: "Result data (serialized) after perform an operation"
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0,
      comment: "Operation status (OPEN | COMPLETE | RETRIABLY_FAILED | NOT_RETRIABLY_FAILED)"
    },
    error_code: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "Code of the error that appeared during operation execution (used to aggregate related failed operations)"
    },
    result_message: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Operation result message"
    }
  }, {
    sequelize,
    tableName: 'magento_operation',
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
        name: "MAGENTO_OPERATION_BULK_UUID_ERROR_CODE",
        using: "BTREE",
        fields: [
          { name: "bulk_uuid" },
          { name: "error_code" },
        ]
      },
    ]
  });
};
