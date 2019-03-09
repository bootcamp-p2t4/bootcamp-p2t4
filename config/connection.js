"use strict";
/*eslint-env node*/

// require path
const path = require("path");

// require dotenv
const dotenv = require("dotenv").config({
  path: ".env"
});
if (dotenv.error) throw dotenv.error;

// require sequelize
// Sequelize (capital) will reference the standard library
let Sequelize = require("sequelize");

// sequelize (lower case) will reference connection to mysql database
// Sequelize("database_name_db", "username", "password", {obj});
let sequelize = new Sequelize("stock_novice_db", process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  dialect: "mysql",
  pool: {
    max: 30,
    min: 0,
    idel: 10000
  }
});

// export sequelize connection
module.exports = sequelize;