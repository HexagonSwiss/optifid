const DataTypes = require('sequelize');
const sequelize = require('../database/connection');
const Subscriptions = require('./subscriptions');

const Role = sequelize.define('Role', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.ENUM(['admin', 'user', 'customer']),
  },
}, {
  tableName: 'role', 
});


sequelize.sync();

module.exports = Role;