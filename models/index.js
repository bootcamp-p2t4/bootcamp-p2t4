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
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

/*
tblStocks = sqlTable(tbl_stocks);
sequelize.tblStocks.hasMany(tblStockPrices);

tblStockPrices = sqlTable(tbl_stock_prices);
sequelize.tblStockPrices.belongsTo(tblStocks);
*/

log(JSON.parse(db));

module.exports = db;
