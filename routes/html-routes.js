"use strict";
const log = global.console.log;

module.exports = function (app) {

  // GET route
  app.get("/", function (req, res) {
    log(req);
    log(`__dirname: ${__dirname}`);
    res.sendFile("../public/assets/index.html");
  });

};