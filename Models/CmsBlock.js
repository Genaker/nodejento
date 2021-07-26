const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CmsBlock', {
    block_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Block Title"
    },
    identifier: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "Block String Identifier"
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Block Content"
    },
    creation_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Block Creation Time"
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp'),
      comment: "Block Modification Time"
    },
    is_active: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1,
      comment: "Is Block Active"
    }
  }, {
    sequelize,
    tableName: 'cms_block',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "block_id" },
        ]
      },
      {
        name: "CMS_BLOCK_TITLE_IDENTIFIER_CONTENT",
        type: "FULLTEXT",
        fields: [
          { name: "title" },
          { name: "identifier" },
          { name: "content" },
        ]
      },
    ]
  });
};
