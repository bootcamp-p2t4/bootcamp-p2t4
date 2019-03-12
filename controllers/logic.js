"use strict";
const log = global.console.log;

module.exports = {

  // inclusive min <= random <= inclusive max
  getRandom: (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  parseSequelize: (sqlResults, key="", val="") => {
    const queryData = [];
    sqlResults.forEach(element => {
      if (key.length > 0) element.dataValues[key] = val;
      queryData.push(element.dataValues);
    });
    return queryData;
  },

};