"use strict";

// model.tblTransactions
module.exports = (sequelize, DataTypes) => {

  return sequelize.define("tbl_transactions", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      notNull: true
    },
    user_name: {
      type: DataTypes.STRING(255),
      notNull: true
    },
    buy_sell: {
      type: DataTypes.STRING(255),
      notNull: true
    },
    number_shares: {
      type: DataTypes.INTEGER,
      notNull: true
    },
    stock_ticker: {
      type: DataTypes.STRING(255),
      notNull: true
    },
    monthly_period: {
      type: DataTypes.INTEGER,
      notNull: true
    }
  }, {
    underscored: true,
    timestamps: true
  });

};

// create table if it doesn't exist
/*
tblTransactions.sync()
  .then(function () {
    // do nothing
    // or populate data in new table
  });
*/