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
    res.sendFile(path.join(__dirname, "../views/index.html"));
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
      },
      defaults: {
        user_password: userPassword,
        user_email: req.body.user_email
      }
    }).then(function (sqlUser) {
      if (!sqlUser[1]) {
        // if NOT true: existing sqlUser
        sqlUser = logic.parseSequelize(sqlUser, ["user"], [0]);
        log("user already exists, sqlUser");
        log(sqlUser);
        db.tbl_positions.findAll({
          where: {
            user_name: req.body.user_name
          },
          include: [{
            model: db.tbl_stocks
          }]
        }).then(function (sqlPositions) {
          sqlPositions = logic.parseSequelize(sqlPositions);
          log("sqlPositions:");
          log(sqlPositions);
          db.tbl_transactions.findAll({
            where: {
              user_name: req.body.user_name
            }
          }).then(function (sqlTransactions) {
            sqlTransactions = logic.parseSequelize(sqlTransactions);
            log("sqlTransactions:");
            log(sqlTransactions);
            res.render("index", {
              user: sqlUser,
              positions: sqlPositions,
              transactions: sqlTransactions
            });
          });
        });
      } else {
        // else new sqlUser
        sqlUser = logic.parseSequelize(sqlUser);
        log("created new user, sqlUser:");
        log(sqlUser);
        db.tbl_positions.bulkCreate(
          [{
            user_name: req.body.user_name,
            ticker: "SP500",
            ticker_period: "SP500_1",
            pos_price: 1386
          },
          {
            user_name: req.body.user_name,
            ticker: "DJI",
            ticker_period: "DJI_1",
            pos_price: 12818
          },
          {
            user_name: req.body.user_name,
            ticker: "NDAQ",
            ticker_period: "NDAQ_1",
            pos_price: 36
          },
          {
            user_name: req.body.user_name,
            ticker: "JPM",
            ticker_period: "JPM_1",
            pos_price: 48
          },
          {
            user_name: req.body.user_name,
            ticker: "BAC",
            ticker_period: "BAC_1",
            pos_price: 38
          },
          {
            user_name: req.body.user_name,
            ticker: "WFC",
            ticker_period: "WFC_1",
            pos_price: 30
          },
          {
            user_name: req.body.user_name,
            ticker: "AAPL",
            ticker_period: "AAPL_1",
            pos_price: 25
          },
          {
            user_name: req.body.user_name,
            ticker: "GOOGL",
            ticker_period: "GOOGL_1",
            pos_price: 289
          },
          {
            user_name: req.body.user_name,
            ticker: "AMZN",
            ticker_period: "AMZN_1",
            pos_price: 78
          }
          ]
        ).then(function (sqlPositions) {
          sqlPositions = logic.parseSequelize(sqlPositions);
          log("created new positions, sqlPositions:");
          log(sqlPositions);
          res.render("index", {
            user: sqlUser,
            positions: sqlPositions
          });
        });
      } // end if
    });
  });

  // POST /buy_sell route
  app.post("/buy_sell", function (req, res) {
    log(req.body);
    log(`__dirname: ${__dirname}`);
    const shares = logic.negateSellShares(req.body.trx_shares, req.body.buy_sell);
    log(`typeof shares: ${typeof(shares)}`);
    const value = shares * req.body.price;
    log(`typeof value: ${typeof(value)}`);
    // create new transaction
    db.tbl_transactions.create({
      user_name: req.body.user_name,
      monthly_period: parseInt(req.body.monthly_period),
      buy_sell: req.body.buy_sell,
      ticker: req.body.ticker,
      trx_shares: shares,
      trx_price: parseInt(req.body.price),
      trx_value: value,
      ticker_period: req.body.ticker.concat("_", req.body.monthly_period)
    }).then(function (sqlNewTransaction) {
      // sqlNewTransaction = logic.parseSequelize(sqlNewTransaction);
      log("sqlNewTransaction:");
      log(sqlNewTransaction);
      // get user.cash
      let cash = logic.getCashBalance(req.user.user_name);
      log(`cash: ${cash}`);
      // add trx_value
      cash = cash + value;
      // update user.cash
      db.tbl_positions.update({
        cash: cash,
        where: {
          user_name: req.user.user_name
        }
      }).then(function (sqlPositionUpdate) {
        res.redirect("/user");
      });

      /*
      db.tbl_transactions.findAll({
        where: {
          user_name: req.body.user_name
        }
      }).then(function (sqlTransactions) {
        sqlTransactions = logic.parseSequelize(sqlTransactions);
        log("sqlTransactions:");
        log(sqlTransactions);
        res.render("index", {
          user: sqlUser,
          transactions: sqlTransactions
        });
      });
      */

    });
  });

  // POST /next route
  app.post("/next", function (req, res) {
    log(req.body);
    log(`__dirname: ${__dirname}`);
    //res.redirect("/positions");
  });

  // GET /user route
  app.get("/user", function (req, res) {
    log(req.url);
    db.tbl_users.findAll({
      where: {
        user_name: "test_user"
      }
    }).then(function (sqlUser) {
      sqlUser = logic.parseSequelize(sqlUser);
      log("sqlUser:");
      log(sqlUser);
      db.tbl_positions.findAll({
        where: {
          user_name: "test_user"
        }
      }).then(function (sqlPositions) {
        sqlPositions = logic.parseSequelize(sqlPositions);
        log("sqlPositions:");
        log(sqlPositions);
        db.tbl_transactions.findAll({
          where: {
            user_name: "test_user"
          }
        }).then(function (sqlTransactions) {
          sqlTransactions = logic.parseSequelize(sqlTransactions);
          log("sqlTransactions:");
          log(sqlTransactions);
          res.render("index", {
            user: sqlUser,
            positions: sqlPositions,
            transactions: sqlTransactions
          });
        });
      });
    });
  });

};