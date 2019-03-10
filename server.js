"use strict";
const log = global.console.log;

// dependencies
const db = require("./models"); // requiring dir defaults to index.js
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

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
app.listen(PORT, function (err) {
  if (err) throw err;
  log(`express app listening on PORT ${PORT}`);
  db.sequelize.sync();
});
