module.exports = function(sequelize, DataTypes) {
  var Products = sequelize.define("Products", {
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false
      // defaultValue: .jpg,
    },
    favorite: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    almostOut: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dateOfPurchase: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: DataTypes.NOW
    },
    category: {
      type: DataTypes.STRING
    }
  });

  Products.associate = function(models) {
    Products.belongsTo(models.Categories, {
      foreignKey: {
        allowNull: false
      }
    })
  }
  return Products;
};