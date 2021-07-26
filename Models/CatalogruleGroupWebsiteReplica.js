const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogruleGroupWebsiteReplica', {
    rule_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "Rule ID"
    },
    customer_group_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "Customer Group ID"
    },
    website_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      comment: "Website ID"
    }
  }, {
    sequelize,
    tableName: 'catalogrule_group_website_replica',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rule_id" },
          { name: "customer_group_id" },
          { name: "website_id" },
        ]
      },
      {
        name: "CATALOGRULE_GROUP_WEBSITE_CUSTOMER_GROUP_ID",
        using: "BTREE",
        fields: [
          { name: "customer_group_id" },
        ]
      },
      {
        name: "CATALOGRULE_GROUP_WEBSITE_WEBSITE_ID",
        using: "BTREE",
        fields: [
          { name: "website_id" },
        ]
      },
    ]
  });
};
