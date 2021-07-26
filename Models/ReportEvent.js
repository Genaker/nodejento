const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReportEvent', {
    event_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Event ID"
    },
    logged_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Logged At"
    },
    event_type_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Event Type ID",
      references: {
        model: 'report_event_types',
        key: 'event_type_id'
      }
    },
    object_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Object ID"
    },
    subject_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Subject ID"
    },
    subtype: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Subtype"
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
      }
    }
  }, {
    sequelize,
    tableName: 'report_event',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "event_id" },
        ]
      },
      {
        name: "REPORT_EVENT_EVENT_TYPE_ID",
        using: "BTREE",
        fields: [
          { name: "event_type_id" },
        ]
      },
      {
        name: "REPORT_EVENT_SUBJECT_ID",
        using: "BTREE",
        fields: [
          { name: "subject_id" },
        ]
      },
      {
        name: "REPORT_EVENT_OBJECT_ID",
        using: "BTREE",
        fields: [
          { name: "object_id" },
        ]
      },
      {
        name: "REPORT_EVENT_SUBTYPE",
        using: "BTREE",
        fields: [
          { name: "subtype" },
        ]
      },
      {
        name: "REPORT_EVENT_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
