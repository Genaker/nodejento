const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CustomerVisitor', {
    visitor_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Visitor ID"
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Customer ID"
    },
    session_id: {
      type: DataTypes.STRING(64),
      allowNull: true,
      comment: "Session ID"
    },
    last_visit_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Last Visit Time"
    }
  }, {
    sequelize,
    tableName: 'customer_visitor',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "visitor_id" },
        ]
      },
      {
        name: "CUSTOMER_VISITOR_CUSTOMER_ID",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "CUSTOMER_VISITOR_LAST_VISIT_AT",
        using: "BTREE",
        fields: [
          { name: "last_visit_at" },
        ]
      },
    ]
  });
};
