"use strict";
const log = global.console.log;

const db = require("../models/index");

module.exports = function (app) {

  // GET route to SELECT *
  app.get("/stocks/:ticker", function (req, res) {
    log(req.url);
    log(`__dirname: ${__dirname}`);
    // if params
    if (req.params.ticker) {
      db.tblStocks.findOne(req.params.ticker, function (mysqlRes) {
        log(mysqlRes);
        res.json(mysqlRes);
      });
    } else {
      db.tblStocks.findAll(function (mysqlRes) {
        log(mysqlRes);
        res.json(mysqlRes);
      });
    }
  });

};
