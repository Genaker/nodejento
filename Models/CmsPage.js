const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CmsPage', {
    page_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Page Title"
    },
    page_layout: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Page Layout"
    },
    meta_keywords: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Page Meta Keywords"
    },
    meta_description: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Page Meta Description"
    },
    identifier: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "Page String Identifier"
    },
    content_heading: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Page Content Heading"
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Page Content"
    },
    creation_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Page Creation Time"
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Page Modification Time"
    },
    is_active: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1,
      comment: "Is Page Active"
    },
    sort_order: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Page Sort Order"
    },
    layout_update_xml: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Page Layout Update Content"
    },
    custom_theme: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "Page Custom Theme"
    },
    custom_root_template: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Page Custom Template"
    },
    custom_layout_update_xml: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Page Custom Layout Update Content"
    },
    layout_update_selected: {
      type: DataTypes.STRING(128),
      allowNull: true,
      comment: "Page Custom Layout File"
    },
    custom_theme_from: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Page Custom Theme Active From Date"
    },
    custom_theme_to: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "Page Custom Theme Active To Date"
    },
    meta_title: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Page Meta Title"
    }
  }, {
    sequelize,
    tableName: 'cms_page',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "page_id" },
        ]
      },
      {
        name: "CMS_PAGE_IDENTIFIER",
        using: "BTREE",
        fields: [
          { name: "identifier" },
        ]
      },
      {
        name: "CMS_PAGE_TITLE_META_KEYWORDS_META_DESCRIPTION_IDENTIFIER_CONTENT",
        type: "FULLTEXT",
        fields: [
          { name: "title" },
          { name: "meta_keywords" },
          { name: "meta_description" },
          { name: "identifier" },
          { name: "content" },
        ]
      },
    ]
  });
};
