const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MagentoBulk', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Bulk Internal ID (must not be exposed)"
    },
    uuid: {
      type: DataTypes.BLOB,
      allowNull: true,
      comment: "Bulk UUID (can be exposed to reference bulk entity)",
      unique: "MAGENTO_BULK_UUID"
    },
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "ID of the WebAPI user that performed an action"
    },
    user_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Which type of user"
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Bulk Description"
    },
    operation_count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Total number of operations scheduled within this bulk"
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Bulk start time"
    }
  }, {
    sequelize,
    tableName: 'magento_bulk',
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
        name: "MAGENTO_BULK_UUID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "uuid" },
        ]
      },
      {
        name: "MAGENTO_BULK_USER_ID",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "MAGENTO_BULK_START_TIME",
        using: "BTREE",
        fields: [
          { name: "start_time" },
        ]
      },
    ]
  });
};
