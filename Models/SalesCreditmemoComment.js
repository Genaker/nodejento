const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalesCreditmemoComment', {
    entity_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    parent_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      comment: "Parent ID",
      references: {
        model: 'sales_creditmemo',
        key: 'entity_id'
      }
    },
    is_customer_notified: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Is Customer Notified"
    },
    is_visible_on_front: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Visible On Front"
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Comment"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Created At"
    }
  }, {
    sequelize,
    tableName: 'sales_creditmemo_comment',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "entity_id" },
        ]
      },
      {
        name: "SALES_CREDITMEMO_COMMENT_CREATED_AT",
        using: "BTREE",
        fields: [
          { name: "created_at" },
        ]
      },
      {
        name: "SALES_CREDITMEMO_COMMENT_PARENT_ID",
        using: "BTREE",
        fields: [
          { name: "parent_id" },
        ]
      },
    ]
  });
};
