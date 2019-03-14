"use strict";

// model.tblPrices
module.exports = (sequelize, DataTypes) => {

  const tbl_stocks = sequelize.define("tbl_stocks", {
    stock_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      notNull: true
    },
    stock: {
      type: DataTypes.STRING(255),
      notNull: true
    },
    ticker: {
      type: DataTypes.STRING(255),
      notNull: true
    },
    monthly_period: {
      type: DataTypes.INTEGER,
      notNull: true
    },
    price_date: {
      type: DataTypes.DATE,
      notNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      notNull: true
    }
  }, {
    timestamps: false
  });

  /* sequelize model table associations
  tbl_stocks.associate = function (db) {

    // add additional associations inside single tbl_name.associate block

  };
  //*/

  return tbl_stocks;

};
