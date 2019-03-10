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
  tblUsers.associate = function (db) {

    tblUsers.belongsTo(db.tblTransactions, {
      foreignKey: "ticker",
      targetKey: "ticker"
    });

    tblStocks.hasMany(db.tblTransactions, {
      foreignKey: "ticker",
      sourceKey: "ticker"
    });

    // add another association inside single tblUsers.associate block

  };
  */

  return tbl_prices;

};
