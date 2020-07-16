const { Sequelize, Op, Model, DataTypes } = require("sequelize");

function db() {
  return new Sequelize('postgres://postgres:12345@localhost:5432/ecommerce7', {
    logging: false, // set to console.log to see the raw SQL queries
    

  });
}

module.exports = db;
