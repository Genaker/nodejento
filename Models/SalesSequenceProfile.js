const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesSequenceProfile', {
    profile_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "ID"
    },
    meta_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Meta_id",
      references: {
        model: 'sales_sequence_meta',
        key: 'meta_id'
      }
    },
    prefix: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Prefix"
    },
    suffix: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Suffix"
    },
    start_value: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "Start value for sequence"
    },
    step: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: "Step for sequence"
    },
    max_value: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "MaxValue for sequence"
    },
    warning_value: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "WarningValue for sequence"
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "isActive flag"
    }
  }, {
    sequelize,
    tableName: 'sales_sequence_profile',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "profile_id" },
        ]
      },
      {
        name: "SALES_SEQUENCE_PROFILE_META_ID_PREFIX_SUFFIX",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "meta_id" },
          { name: "prefix" },
          { name: "suffix" },
        ]
      },
    ]
  });
};
