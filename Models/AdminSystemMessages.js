const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AdminSystemMessages', {
    identity: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
      comment: "Message ID"
    },
    severity: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Problem type"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Create date"
    }
  }, {
    sequelize,
    tableName: 'admin_system_messages',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "identity" },
        ]
      },
    ]
  });
};
