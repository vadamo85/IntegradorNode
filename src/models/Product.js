// Requerir tipos de datos que vamos a usar de sequelize
const {DataTypes} = require('sequelize');
// Requerir la conexion de sequelize
const sequelize = require('./connection');
// Definir un elemento (producto)
const Product = sequelize.define('Product', {
    codigo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoría: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

(async() => {
    await sequelize.sync({force: true}); 
    })();

module.exports = Product;