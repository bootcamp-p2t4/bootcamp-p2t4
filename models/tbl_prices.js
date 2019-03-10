"use strict";

// model.tblPrices
module.exports = (sequelize, DataTypes) => {

  const tbl_prices = sequelize.define("tbl_prices", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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

  /*
  // sequelize model table associations
  tbl_prices.associate = function (db) {

    tbl_prices.belongsTo(db.tbl_stocks, {
      targetKey: "ticker",
      foreignKey: "ticker"
    });

    tbl_prices.belongsTo(db.tbl_users, {
      targetKey: "monthly_period",
      foreignKey: "monthly_period"
    });

//  tblprices.hasMany(db.tblTransactions, {
//    sourceKey: "ticker",
//    foreignKey: "ticker"
//  });

    // add additional associations inside single tbl_name.associate block

  };
  */

  return tbl_prices;

};
