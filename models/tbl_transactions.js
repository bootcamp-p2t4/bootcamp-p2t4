"use strict";

// model.tblTransactions
module.exports = (sequelize, DataTypes) => {

  const tbl_transactions = sequelize.define("tbl_transactions", {
    trx_id: {
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
      type: DataTypes.INTEGER,
      notNull: true
    },
    buy_sell: {
      type: DataTypes.STRING(255),
      notNull: true
    },
    stock: {
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

  // sequelize model table associations
  tbl_transactions.associate = function (db) {

    tbl_transactions.belongsTo(db.tbl_users, {
      foreignKey: "user_name",
      targetKey: "user_name"
    });

    // add additional associations inside single tbl_name.associate block

  };
  //*/


  return tbl_transactions;

};