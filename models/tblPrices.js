"use strict";

// model.tblPrices
module.exports = (sequelize, DataTypes) => {

  const tblPrices = sequelize.define("tbl_prices", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      notNull: true
    },
    stock_ticker: {
      type: DataTypes.STRING(255),
      notNull: true
    },
    price_period: {
      type: DataTypes.INTEGER,
      notNull: true
    },
    price_date: {
      type: DataTypes.DATE,
      notNull: true
    },
    stock_price: {
      type: DataTypes.INTEGER,
      notNull: true
    }
  }, {
    underscored: true,
    timestamps: true
  });

  /*
  tblPrices.associate = function (db) {
    tblPrices.belongsTo(db.tblStocks, {
      foreignKey: "stock_ticker",
      targetKey: "stock_ticker"
    });

    // convert return to const with return at end
    // add another association insode the single tblPrices.associate

  };
  */

  return tblPrices;

};

// create table if it doesn't exist
/*
tblPrices.sync()
  .then(function () {
    // do nothing
    // or populate data in new table
  });
*/