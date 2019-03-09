"use strict";

// Sequelize (capital) will require sequelize standard library
const Sequelize = global.require("sequelize");
// sequelize (lower case) will require connection.js module.exports object
const sequelize = global.require("./../config/connection");

// model.tblTransactions
const tblTransactions = sequelize.define("tbl_transactions", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    notNull: true
  },
  user_name: {
    type: Sequelize.STRING(255),
    notNull: true
  },
  buy_sell: {
    type: Sequelize.STRING(255),
    notNull: true
  },
  number_shares: {
    type: Sequelize.INTEGER,
    notNull: true
  },
  stock_ticker: {
    type: Sequelize.STRING(255),
    notNull: true
  },
  monthly_period: {
    type: Sequelize.INTEGER,
    notNull: true
  }
});

// create table if it doesn't exist
/*
tblTransactions.sync()
  .then(function () {
    // do nothing
    // or populate data in new table
  });
*/

// makes model.tbleTransactions available for other files (will also create a table)
module.exports = tblTransactions;
