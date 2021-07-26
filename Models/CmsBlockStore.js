const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CmsBlockStore', {
    block_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'cms_block',
        key: 'block_id'
      }
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
      }
    }
  }, {
    sequelize,
    tableName: 'cms_block_store',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "block_id" },
          { name: "store_id" },
        ]
      },
      {
        name: "CMS_BLOCK_STORE_STORE_ID",
        using: "BTREE",
        fields: [
          { name: "store_id" },
        ]
      },
    ]
  });
};
