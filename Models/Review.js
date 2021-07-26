const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Review', {
    review_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Review ID"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Review create date"
    },
    entity_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Entity ID",
      references: {
        model: 'review_entity',
        key: 'entity_id'
      }
    },
    entity_pk_value: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Product ID"
    },
    status_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Status code",
      references: {
        model: 'review_status',
        key: 'status_id'
      }
    }
  }, {
    sequelize,
    tableName: 'review',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "review_id" },
        ]
      },
      {
        name: "REVIEW_ENTITY_ID",
        using: "BTREE",
        fields: [
          { name: "entity_id" },
        ]
      },
      {
        name: "REVIEW_STATUS_ID",
        using: "BTREE",
        fields: [
          { name: "status_id" },
        ]
      },
      {
        name: "REVIEW_ENTITY_PK_VALUE",
        using: "BTREE",
        fields: [
          { name: "entity_pk_value" },
        ]
      },
    ]
  });
};
