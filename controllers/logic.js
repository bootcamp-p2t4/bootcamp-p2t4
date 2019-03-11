"use strict";
const log = global.console.log;

module.exports = {

  
  parseSequelize: (sqlResults) => {
    const queryData = [];
    sqlResults.forEach(element => {
      element.dataValues.newProperty = "virtual field from logic.js";
      queryData.push(element.dataValues);
    });
    return queryData;
  }

};