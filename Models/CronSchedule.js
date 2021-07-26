const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CronSchedule', {
    schedule_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Schedule ID"
    },
    job_code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "0",
      comment: "Job Code"
    },
    status: {
      type: DataTypes.STRING(7),
      allowNull: false,
      defaultValue: "pending",
      comment: "Status"
    },
    messages: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Messages"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Created At"
    },
    scheduled_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Scheduled At"
    },
    executed_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Executed At"
    },
    finished_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Finished At"
    }
  }, {
    sequelize,
    tableName: 'cron_schedule',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "schedule_id" },
        ]
      },
      {
        name: "CRON_SCHEDULE_JOB_CODE",
        using: "BTREE",
        fields: [
          { name: "job_code" },
        ]
      },
      {
        name: "CRON_SCHEDULE_SCHEDULED_AT_STATUS",
        using: "BTREE",
        fields: [
          { name: "scheduled_at" },
          { name: "status" },
        ]
      },
      {
        name: "CRON_SCHEDULE_SCHEDULE_ID_STATUS",
        using: "BTREE",
        fields: [
          { name: "schedule_id" },
          { name: "status" },
        ]
      },
    ]
  });
};
