// Requerir Sequelize
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'firthunandz_cac23573_g1',
    '337747_usuario',
    'cac23753',
    {
        host: 'mysql-firthunandz.alwaysdata.net',
        dialectModule: require('mysql2'),
        dialect: 'mysql',
    }
);

// const sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASS,
//     {
//         host: process.env.DB_HOST,
//         dialectModule: require('mysql2'),
//         dialect: 'mysql',
//     }
// );

// Exportar modulo
module.exports = sequelize;