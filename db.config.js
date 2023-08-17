const Sequelize = require('sequelize');
const dbName = 'customer';
const dbuser = 'root';
const dbPassword = 'root';

const sequelize = new Sequelize(dbName, dbuser, dbPassword,{
    host : 'localhost',
    port : 3306,
    dialect : 'mysql',
});

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;
//Models denoting tables
db.customers = require('./customer.model')(sequelize, Sequelize);

module.exports = db;

