"use strict";

// model.tblStocks
module.exports = (sequelize, DataTypes) => {

  const tblStocks = sequelize.define("tbl_stocks", {
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
      unique: true,
      notNull: true
    }
  }, {
    underscored: true,
    timestamps: true
  });

  /*
  tblStocks.associate = function (db) {
    tblStocks.hasMany(db.tblPrices, {
      foreignKey: "stock_ticker",
      sourceKey: "stock_ticker"
    });

    // convert return to const with return at end
    // add another association insode the single tblStocks.associate

  };
  */
 
  return tblStocks;

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
//*/