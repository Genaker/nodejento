const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmailTemplate', {
    template_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Template ID"
    },
    template_code: {
      type: DataTypes.STRING(150),
      allowNull: false,
      comment: "Template Name",
      unique: "EMAIL_TEMPLATE_TEMPLATE_CODE"
    },
    template_text: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "Template Content"
    },
    template_styles: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Templste Styles"
    },
    template_type: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      comment: "Template Type"
    },
    template_subject: {
      type: DataTypes.STRING(200),
      allowNull: false,
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
    added_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Date of Template Creation"
    },
    modified_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Date of Template Modification"
    },
    orig_template_code: {
      type: DataTypes.STRING(200),
      allowNull: true,
      comment: "Original Template Code"
    },
    orig_template_variables: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Original Template Variables"
    },
    is_legacy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "Should the template render in legacy mode"
    }
  }, {
    sequelize,
    tableName: 'email_template',
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
        name: "EMAIL_TEMPLATE_TEMPLATE_CODE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "template_code" },
        ]
      },
      {
        name: "EMAIL_TEMPLATE_ADDED_AT",
        using: "BTREE",
        fields: [
          { name: "added_at" },
        ]
      },
      {
        name: "EMAIL_TEMPLATE_MODIFIED_AT",
        using: "BTREE",
        fields: [
          { name: "modified_at" },
        ]
      },
    ]
  });
};
