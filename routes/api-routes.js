"use strict";
const log = global.console.log;

const tblStocks = require("../models/tblStocks");

module.exports = function (app) {

  // GET route to SELECT *
  app.get("/stocks/:ticker", function (req, res) {
    log(req.url);
    log(`__dirname: ${__dirname}`);
    // if params
    if (req.params.ticker) {
      tblStocks.findOne(req.params.ticker, function (mysqlRes) {
        log(mysqlRes);
        res.json(mysqlRes);
      });
    } else {
      tblStocks.findAll(function (mysqlRes) {
        log(mysqlRes);
        res.json(mysqlRes);
      });
    }
  });

};