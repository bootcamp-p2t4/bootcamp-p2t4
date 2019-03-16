"use strict";
const log = global.console.log;
const db = require("../models"); // requiring dir defaults to index.js
const Op = db.Sequelize.Op;

module.exports = {

  // inclusive min <= random <= inclusive max
  getRandom: (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random.toString();
  },

  parseSequelize: (sqlResults, key = [""], val = [0]) => {
    const queryData = [];
    sqlResults.forEach(element => {
      if (key[0].length > 0) {
        key.forEach((value, index) => {
          element.dataValues[value] = val[index];
        });
      }
      queryData.push(element.dataValues);
    });
    return queryData;
  },

  negateSellShares: (shares, buy_sell) => {
    if (buy_sell == "sell") {
      shares = shares * -1;
    }
    log(`logic typeof shares: ${typeof(shares)}`);
    return shares;
  },

  getCashBalance: (user_name) => {
    db.tbl_users.findOne({
      where: {
        user_name: user_name
      }
    }).then(function(sqlUser){
      log("sqlUser:");
      log(sqlUser);
      return sqlUser.dataValues.cash;
    });
  }

};