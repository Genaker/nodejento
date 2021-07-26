const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CatalogruleWebsite', {
    rule_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Rule ID",
      references: {
        model: 'catalogrule',
        key: 'rule_id'
      }
    },
    website_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Website ID",
      references: {
        model: 'store_website',
        key: 'website_id'
      }
    }
  }, {
    sequelize,
    tableName: 'catalogrule_website',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "rule_id" },
          { name: "website_id" },
        ]
      },
      {
        name: "CATALOGRULE_WEBSITE_WEBSITE_ID",
        using: "BTREE",
        fields: [
          { name: "website_id" },
        ]
      },
    ]
  });
};
