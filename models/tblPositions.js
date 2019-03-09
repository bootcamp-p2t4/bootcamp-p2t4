"use strict";

// Sequelize (capital) will require sequelize standard library
const Sequelize = global.require("sequelize");
// sequelize (lower case) will require connection.js module.exports object
const sequelize = global.require("./../config/connection");

// model.tblPositions
const tblPositions = sequelize.define("tbl_positions", {
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
  stock_ticker: {
    type: Sequelize.STRING(255),
    notNull: true
  },
  number_shares: {
    type: Sequelize.INTEGER,
    notNull: true
  }
});

// create table if it doesn't exist
/*
tblPositions.sync()
  .then(function () {
    // do nothing
    // or populate data in new table
  });
*/

// makes model.tblePositions available for other files (will also create a table)
module.exports = tblPositions;
