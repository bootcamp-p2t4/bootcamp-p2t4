"use strict";

// Sequelize (capital) will require sequelize standard library
const Sequelize = global.require("sequelize");
// sequelize (lower case) will require connection.js module.exports object
const sequelize = global.require("./../config/connection");


// model.tblStockPrices
const tblPrices = sequelize.define("tbl_prices", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    notNull: true
  },
  stock_ticker: {
    type: Sequelize.STRING(255),
    notNull: true
  },
  price_period: {
    type: Sequelize.INTEGER,
    notNull: true
  },
  price_date: {
    type: Sequelize.DATE,
    notNull: true
  },
  stock_price: {
    type: Sequelize.INTEGER,
    notNull: true
  }
});

// create table if it doesn't exist
/*
tblPrices.sync()
  .then(function () {
    // do nothing
    // or populate data in new table
  });
*/

// makes model.tblePrices available for other files (will also create a table)
module.exports = tblPrices;
