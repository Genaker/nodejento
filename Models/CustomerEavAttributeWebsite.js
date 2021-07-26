const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CustomerEavAttributeWebsite', {
    attribute_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Attribute ID",
      references: {
        model: 'eav_attribute',
        key: 'attribute_id'
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
    },
    is_visible: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Is Visible"
    },
    is_required: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Is Required"
    },
    default_value: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Default Value"
    },
    multiline_count: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      comment: "Multiline Count"
    }
  }, {
    sequelize,
    tableName: 'customer_eav_attribute_website',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "attribute_id" },
          { name: "website_id" },
        ]
      },
      {
        name: "CUSTOMER_EAV_ATTRIBUTE_WEBSITE_WEBSITE_ID",
        using: "BTREE",
        fields: [
          { name: "website_id" },
        ]
      },
    ]
  });
};
