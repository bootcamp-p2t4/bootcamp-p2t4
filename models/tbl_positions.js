"use strict";

// model.tbl_positions
module.exports = (sequelize, DataTypes) => {

  const tbl_positions = sequelize.define("tbl_positions", {
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
  // sequelize model table associations
  tbl_positions.associate = function (db) {

    tbl_positions.belongsTo(db.tbl_users, {
      targetKey: "monthly_period",
      foreignKey: "monthly_period"
    });

    tbl_positions.belongsTo(db.tbl_users, {
      targetKey: "monthly_period",
      foreignKey: "monthly_period"
    });

    
//  tblStocks.hasMany(db.tblTransactions, {
//    sourceKey: "ticker",
//    foreignKey: "ticker"
//  });
    
    

    // add additional associations inside single tbl_name.associate block

  };
  */


  return tbl_positions;

};