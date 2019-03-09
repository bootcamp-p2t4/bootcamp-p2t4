"use strict";
const log = global.console.log;

const path = require("path");

module.exports = function (app) {

  // GET route
  app.get("/", function (req, res) {
    log(req.url);
    log(`__dirname: ${__dirname}`);
    res.sendFile(path.join(__dirname, "../public/assets/index.html"));
  });

};