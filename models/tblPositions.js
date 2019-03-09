"use strict";

// model.tblPositions
module.exports = (sequelize, DataTypes) => {

  return sequelize.define("tbl_positions", {
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
    stock_ticker: {
      type: DataTypes.STRING(255),
      notNull: true
    },
    number_shares: {
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
tblPositions.sync()
  .then(function () {
    // do nothing
    // or populate data in new table
  });
*/