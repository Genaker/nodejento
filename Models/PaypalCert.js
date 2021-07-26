const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PaypalCert', {
    cert_id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Cert ID"
    },
    website_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "Website ID",
      references: {
        model: 'store_website',
        key: 'website_id'
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Content"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "Updated At"
    }
  }, {
    sequelize,
    tableName: 'paypal_cert',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cert_id" },
        ]
      },
      {
        name: "PAYPAL_CERT_WEBSITE_ID",
        using: "BTREE",
        fields: [
          { name: "website_id" },
        ]
      },
    ]
  });
};
