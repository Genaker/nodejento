const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReportEventTypes', {
    event_type_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Event Type ID"
    },
    event_name: {
      type: DataTypes.STRING(64),
      allowNull: false,
      comment: "Event Name"
    },
    customer_login: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Customer Login"
    }
  }, {
    sequelize,
    tableName: 'report_event_types',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "event_type_id" },
        ]
      },
    ]
  });
};
