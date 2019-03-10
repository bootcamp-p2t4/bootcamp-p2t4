"use strict";

// model.tblUsers
module.exports = (sequelize, DataTypes) => {

  const tbl_users = sequelize.define("tbl_users", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      notNull: true
    },
    user_name: {
      type: DataTypes.STRING(255),
      notNull: true
    },
    user_password: {
      type: DataTypes.STRING(255),
      notNull: true
    },
    user_email: {
      type: DataTypes.STRING(255),
      notNull: true
    },
    monthly_period: {
      type: DataTypes.INTEGER,
      notNull: true,
      defaultValue: 1
    }
  }, {
    underscored: true,
    timestamps: true
  });

  /*
  tblUsers.associate = function (db) {

    tblUsers.belongsTo(db.tblTransactions, {
      foreignKey: "ticker",
      targetKey: "ticker"
    });

    tblStocks.hasMany(db.tblTransactions, {
      foreignKey: "ticker",
      sourceKey: "ticker"
    });

    // add another association inside single tblUsers.associate block

  };
  */

  return tbl_users;

};