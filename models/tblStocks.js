"use strict";

// model.tblStocks
module.exports = (sequelize, DataTypes) => {

  return sequelize.define("tbl_stocks", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      notNull: true
    },
    stock_name: {
      type: DataTypes.STRING(255),
      notNull: true
    },
    stock_ticker: {
      type: DataTypes.STRING(255),
      notNull: true
    }
  });

};

/* using stock_ticker as route_name
route_name: {
  type: DataTypes.STRING(255),
  notNull: true
},
*/

// create table if it doesn't exist
/*
tblStocks.sync()
  .then(function () {
    // do nothing
    // or populate data in new table
  });
*/
