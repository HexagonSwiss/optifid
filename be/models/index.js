const DataTypes = require('sequelize');
const sequelize = require('../database/connection');
const Subscriptions = require('./subscriptions');

const Users = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING(255),
  },
  password: {
    type: DataTypes.STRING(255),
  },
  fk_id_role: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    references: {
      model: Subscriptions,
      key: 'id',
    },
  },
  email_verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  term_condition_privacy: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  token: {
    type: DataTypes.STRING(255),
  },
}, {
  tableName: 'user', 
});

Users.belongsTo(Subscriptions, { foreignKey: 'fk_id_subscription', targetKey: 'id' });

sequelize.sync();

module.exports = Users;
