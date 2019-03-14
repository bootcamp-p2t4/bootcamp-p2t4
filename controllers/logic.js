"use strict";
const log = global.console.log;

module.exports = {

  // inclusive min <= random <= inclusive max
  getRandom: (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

};