const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DesignChange', {
    design_change_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "Design Change ID"
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
      }
    },
    design: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Design"
    },
    date_from: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "First Date of Design Activity"
    },
    date_to: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Last Date of Design Activity"
    }
  }, {
    sequelize,
    tableName: 'design_change',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "design_change_id" },
        ]
      },
      {
        name: "DESIGN_CHANGE_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
