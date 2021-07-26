const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NewsletterTemplate', {
    template_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Template ID"
    },
    template_code: {
      type: DataTypes.STRING(150),
      allowNull: true,
      comment: "Template Code"
    },
    template_text: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Template Text"
    },
    template_styles: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Template Styles"
    },
    template_type: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Template Type"
    },
    template_subject: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "Template Subject"
    },
    template_sender_name: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "Template Sender Name"
    },
    template_sender_email: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "Template Sender Email"
    },
    template_actual: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      defaultValue: 1,
      comment: "Template Actual"
    },
    added_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Added At"
    },
    modified_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Modified At"
    },
    is_legacy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "Should the template render in legacy mode"
    }
  }, {
    sequelize,
    tableName: 'newsletter_template',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "template_id" },
        ]
      },
      {
        name: "NEWSLETTER_TEMPLATE_TEMPLATE_ACTUAL",
        using: "BTREE",
        fields: [
          { name: "template_actual" },
        ]
      },
      {
        name: "NEWSLETTER_TEMPLATE_ADDED_AT",
        using: "BTREE",
        fields: [
          { name: "added_at" },
        ]
      },
      {
        name: "NEWSLETTER_TEMPLATE_MODIFIED_AT",
        using: "BTREE",
        fields: [
          { name: "modified_at" },
        ]
      },
    ]
  });
};
