const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QuoteIdMask', {
    entity_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Entity ID"
    },
    quote_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Quote ID",
      references: {
        model: 'quote',
        key: 'entity_id'
      }
    },
    masked_id: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Masked ID"
    }
  }, {
    sequelize,
    tableName: 'quote_id_mask',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "entity_id" },
          { name: "quote_id" },
        ]
      },
      {
        name: "QUOTE_ID_MASK_QUOTE_ID",
        using: "BTREE",
        fields: [
          { name: "quote_id" },
        ]
      },
      {
        name: "QUOTE_ID_MASK_MASKED_ID",
        using: "BTREE",
        fields: [
          { name: "masked_id" },
        ]
      },
    ]
  });
};
