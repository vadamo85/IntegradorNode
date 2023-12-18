// Requerir tipos de datos que vamos a usar de sequelize
const { DataTypes } = require("sequelize");
// Requerir la conexion de sequelize
const sequelize = require("./connection");
// Definir un elemento (producto)
const Product = sequelize.define("Product", {
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  licence: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  itemDescription: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  skuItem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  itemPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  itemStock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  discount: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  cuotas: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

(async () => {
  //await sequelize.sync({ force: true });
  await sequelize.sync();
})();

module.exports = Product;
