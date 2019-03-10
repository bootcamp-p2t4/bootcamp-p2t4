"use strict";
const log = global.console.log;

const path = require("path");
const db = require("../models"); // requiring dir defaults to index.js

const parseSequelize = (sqlResults) => {
  const queryData = [];
  sqlResults.forEach(element => {
    queryData.push(element.dataValues);
  });
  return queryData;
};

module.exports = function (app) {

  // GET / route
  app.get("/", (req, res) => {
    log(req.url);
    log(`__dirname: ${__dirname}`);
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // GET /positions route
  app.get("/positions", function (req, res) {
    log(req.url);
    log(`__dirname: ${__dirname}`);
    db.tbl_stocks.findAll({}).then(function (sqlStocks) {
      //log(sqlStocks);
      sqlStocks = parseSequelize(sqlStocks);
      log(sqlStocks);
      res.render("index", {
        positions: sqlStocks
      });
      //res.json(sqlStocks);
    });
  });

  // GET /stocks route
  app.get("/stocks", function (req, res) {
    log(req.url);
    log(`__dirname: ${__dirname}`);
    db.tbl_stocks.findAll({}).then(function (sqlStocks) {
      //log(sqlStocks);
      sqlStocks = parseSequelize(sqlStocks);
      log(sqlStocks);
      /*
      res.render("index", {
        stocks: sqlStocks
      });
      */
      res.json(sqlStocks);
    });
  });

  // GET /prices route
  app.get("/prices", function (req, res) {
    log(req.url);
    log(`__dirname: ${__dirname}`);
    db.tbl_prices.findAll({}).then(function (sqlPrices) {
      //log(sqlPrices);
      sqlPrices = parseSequelize(sqlPrices);
      log(sqlPrices);
      /*
      res.render("index", {
        stocks: tblStocksResult
      });
      */
      res.json(sqlPrices);
    });
  });

  // GET /positions route
  app.get("/positions", function (req, res) {
    log(req.url);
    log(`__dirname: ${__dirname}`);
    db.tbl_positions.findAll({}).then(function (sqlPositions) {
      //log(sqlPositions);
      sqlPositions = parseSequelize(sqlPositions);
      log(sqlPositions);
      /*
      res.render("index", {
        stocks: tblStocksResult
      });
      */
      res.json(sqlPositions);
    });
  });

  // GET /transactions route
  app.get("/transactions", function (req, res) {
    log(req.url);
    log(`__dirname: ${__dirname}`);
    db.tbl_transactions.findAll({}).then(function (sqlTransactions) {
      //log(sqlTransactions);
      sqlTransactions = parseSequelize(sqlTransactions);
      log(sqlTransactions);
      /*
      res.render("index", {
        stocks: tblStocksResult
      });
      */
      res.json(sqlTransactions);
    });
  });

  // POST /buy route
  app.post("/buy", function (req, res) {
    log(req.body);
    log(`__dirname: ${__dirname}`);

  });

  // POST /sell route
  app.post("/sell", function (req, res) {
    log(req.body);
    log(`__dirname: ${__dirname}`);

  });

  // POST /next route
  app.post("/next", function (req, res) {
    log(req.body);
    log(`__dirname: ${__dirname}`);

  });

  /*

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

  // http post
  app.post("/", (req, res) => {
    log(JSON.parse(JSON.stringify(req.body)));
    db.addBurger(req.body, (sqlResult) => {
      log("burgers-controller.addBurger:");
      log(JSON.parse(JSON.stringify(sqlResult)));
      res.redirect("/");
    });
  });
  // http put
  // form method only allows get or post
  app.post("/put", (req, res) => {
    log(JSON.parse(JSON.stringify(req.body)));
    db.devourBurger(req.body, (sqlResult) => {
      log("burgers-controller.devourBurger:");
      log(JSON.parse(JSON.stringify(sqlResult)));
      res.redirect("/");
    });
  });
  // http delete
  // form method only allows get or post
  app.post("/delete", (req, res) => {
    log(JSON.parse(JSON.stringify(req.body)));
    db.vomitBurger(req.body, (sqlResult) => {
      log("burgers-controller.vomitBurger:");
      log(JSON.parse(JSON.stringify(sqlResult)));
      res.redirect("/");
    });
  });

*/

};
