"use strict";

// model.tblPositions
module.exports = (sequelize, DataTypes) => {

  const tblPositions = sequelize.define("tbl_positions", {
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
    monthly_period: {
      type: DataTypes.STRING(255),
      notNull: true
    },
    ticker: {
      type: DataTypes.STRING(255),
      notNull: true
    },
    shares: {
      type: DataTypes.INTEGER,
      notNull: true
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

  return tblPositions;

};