// sequelize.js

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: "localhost",
  username: "root",
  password: "123456789",
  database: "portfoliodb",
  dialect: "mysql",
  dialectModule: require("mysql2"),
  benchmark: true,
});

module.exports = sequelize;
