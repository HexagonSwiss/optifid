const { Sequelize } = require('sequelize');
const path = require('path');

// require('dotenv').config({ path: path.join(__dirname, '../env', '.env-local') });

const sequelize = new Sequelize('optified', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb', 
    port: '3306',
});
  
module.exports = sequelize;