"use strict";
const log = global.console.log;

// dependencies
//const path = require("path");
const express = require("express");
const app = express();

// express app data parsing
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Static directory to be served
app.use(express.static("public"));

// api-routes
require("./routes/api-routes.js")(app);

// html-routes
require("./routes/html-routes.js")(app);

const PORT = process.env.PORT || process.env.EXPRESS_PORT || 8080;
// express listener
app.listen(PORT, function () {
  log(`express app listening on PORT ${PORT}`);
});
