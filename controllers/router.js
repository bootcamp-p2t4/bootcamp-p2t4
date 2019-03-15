"use strict";
const log = global.console.log;

const path = require("path");
const db = require("../models"); // requiring dir defaults to index.js
const Op = db.Sequelize.Op;
const logic = require("./logic");

module.exports = function (app) {

  // METHOD route

  // GET /
  app.get("/", (req, res) => {
    log(req.url);
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // POST /login
  app.post("/login", (req, res) => {
    log(req.body);
    log(`__dirname: ${__dirname}`);
    // create user
    const userPassword = logic.getRandom(100000, 999999);
    db.tbl_users.findOrCreate({
      where: {
        user_name: req.body.user_name,
        user_password: userPassword,
        user_email: req.body.user_email
      }
    }).then(function (sqlUser) {
      sqlUser = logic.parseSequelize(sqlUser);
      log("sqlUser:");
      log(sqlUser);
      // respond with stocks as 0 positions
      db.tbl_stocks.findAll({
        where: {
          monthly_period: 1
        }
      }).then(function (sqlStocks) {
        sqlStocks = logic.parseSequelize(sqlStocks);
        log("sqlStocks:");
        log(sqlStocks);
        db.tbl_users.findOne({
          where: {
            user_name: req.body.user_name
          }
        }).then(function (sqlUser) {
          sqlUser = logic.parseSequelize(sqlUser);
          log("sqlUser");
          log(sqlUser);
          db.tbl_transactions.findAll({
            where: {
              user_name: req.body.user_name
            }
          }).then(function (sqlTransactions) {
            sqlTransactions = logic.parseSequelize(sqlTransactions);
            log("sqlTransactions:");
            log(sqlTransactions);
            res.render("index", {
              positions: sqlStocks,
              user: sqlUser,
              transactions: sqlTransactions
            });
          });
        });
      });
    });
  });

  // GET /stocks route
  app.get("/stocks", function (req, res) {
    log(req.url);
    db.tbl_stocks.findAll({
      where: {
        monthly_period: 1
      }
    }).then(function (sqlStocks) {
      sqlStocks = logic.parseSequelize(sqlStocks, ["user_name"], ["test_user"]);
      log("sqlStocks:");
      log(sqlStocks);
      db.tbl_users.findOne({
        where: {
          user_name: "test_user"
        }
      }).then(function (sqlUser) {
        //sqlUser = logic.parseSequelize(sqlUser);
        log("sqlUser");
        log(sqlUser);
        db.tbl_transactions.findAll({
          where: {
            user_name: "test_user"
          }
        }).then(function (sqlTransactions) {
          sqlTransactions = logic.parseSequelize(sqlTransactions);
          log("sqlTransactions:");
          log(sqlTransactions);
          res.render("index", {
            positions: sqlStocks,
            user: sqlUser,
            transactions: sqlTransactions
          });
        });
      });
    });
  });

  // POST /buy_sell route
  app.post("/buy_sell", function (req, res) {
    log(req.body);
    log(`__dirname: ${__dirname}`);
    let shares = logic.negateSellShares(req.body.trx_shares, req.body.buy_sell);
    db.tbl_transactions.create({
      user_name: req.body.user_name,
      monthly_period: req.body.monthly_period,
      buy_sell: req.body.buy_sell,
      stock: req.body.stock,
      ticker: req.body.ticker,
      shares: shares,
      price: req.body.price,
      cash: shares * req.body.price
    }).then(function (sqlNewTransaction) {
      // sqlNewTransaction = logic.parseSequelize(sqlNewTransaction);
      log("sqlNewTransaction:");
      log(sqlNewTransaction);
      db.tbl_transactions.findAll({
        where: {
          user_name: req.body.user_name
        }
      }).then(function (sqlTransactions) {
        sqlTransactions = logic.parseSequelize(sqlTransactions);
        log("sqlTransactions:");
        log(sqlTransactions);
        res.render("index", {
          transactions: sqlTransactions
        });
      });
    });
  });

  // GET /transactions route
  app.get("/transactions", function (req, res) {
    log(req.url);
    log(`__dirname: ${__dirname}`);
    db.tbl_transactions.findAll({}).then(function (sqlTransactions) {
      //log(sqlTransactions);
      sqlTransactions = logic.parseSequelize(sqlTransactions);
      log(sqlTransactions);
      /*
      res.render("index", {
        stocks: tblStocksResult
      });
      */
      res.json(sqlTransactions);
    });
  });

  // POST /next route
  app.post("/next", function (req, res) {
    log(req.body);
    log(`__dirname: ${__dirname}`);
    //res.redirect("/positions");
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