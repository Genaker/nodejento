const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Translation', {
    key_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Key ID of Translation"
    },
    string: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "Translate String",
      comment: "Translation String"
    },
    store_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Store ID",
      references: {
        model: 'store',
        key: 'store_id'
      }
    },
    translate: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Translate"
    },
    locale: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "en_US",
      comment: "Locale"
    },
    crc_string: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 1591228201,
      comment: "Translation String CRC32 Hash"
    }
  }, {
    sequelize,
    tableName: 'translation',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "key_id" },
        ]
      },
      {
        name: "TRANSLATION_STORE_ID_LOCALE_CRC_STRING_STRING",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "store_id" },
          { name: "locale" },
          { name: "crc_string" },
          { name: "string" },
        ]
      },
    ]
  });
};
