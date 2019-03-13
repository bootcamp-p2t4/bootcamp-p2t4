"use strict";
const log = global.console.log;

const fs = require("fs");
const path = require("path");
// Sequelize (capital) will require sequelize standard library
const Sequelize = require("sequelize");
// sequelize (lower case) will require connection.js module.exports object
const sequelize = require("./../config/connection");
const basename = path.basename(__filename);

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })
  .forEach(file => {
    const model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    log(`sequelize associating ${modelName}`);
    db[modelName].associate(db);
  }
});

module.exports = db;
