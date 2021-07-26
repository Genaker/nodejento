const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CheckoutAgreement', {
    agreement_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "Agreement ID"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Name"
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Content"
    },
    content_height: {
      type: DataTypes.STRING(25),
      allowNull: true,
      comment: "Content Height"
    },
    checkbox_text: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Checkbox Text"
    },
    is_active: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Active"
    },
    is_html: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Is Html"
    },
    mode: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0,
      comment: "Applied mode"
    }
  }, {
    sequelize,
    tableName: 'checkout_agreement',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "agreement_id" },
        ]
      },
    ]
  });
};
