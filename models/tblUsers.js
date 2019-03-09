"use strict";

// Sequelize (capital) will require sequelize standard library
const Sequelize = global.require("sequelize");
// sequelize (lower case) will require connection.js module.exports object
const sequelize = global.require("./../config/connection");

// model.tblUsers
const tblUsers = sequelize.define("tbl_users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    notNull: true
  },
  user_name: {
    type: Sequelize.STRING(255),
    notNull: true
  },
  user_password: {
    type: Sequelize.STRING(255),
    notNull: true
  },
  monthly_period: {
    type: Sequelize.INTEGER,
    notNull: true
  }
});

// create table if it doesn't exist
/*
tblUsers.sync()
  .then(function () {
    // do nothing
    // or populate data in new table
  });
*/

// makes model.tbleUsers available for other files (will also create a table)
module.exports = tblUsers;
