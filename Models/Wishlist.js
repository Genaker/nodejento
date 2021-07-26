const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Wishlist', {
    wishlist_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Wishlist ID"
    },
    customer_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Customer ID",
      references: {
        model: 'customer_entity',
        key: 'entity_id'
      },
      unique: "WISHLIST_CUSTOMER_ID_CUSTOMER_ENTITY_ENTITY_ID"
    },
    shared: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Sharing flag (0 or 1)"
    },
    sharing_code: {
      type: DataTypes.STRING(32),
      allowNull: true,
      comment: "Sharing encrypted code"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Last updated date"
    }
  }, {
    sequelize,
    tableName: 'wishlist',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "wishlist_id" },
        ]
      },
      {
        name: "WISHLIST_CUSTOMER_ID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "WISHLIST_SHARED",
        using: "BTREE",
        fields: [
          { name: "shared" },
        ]
      },
    ]
  });
};
