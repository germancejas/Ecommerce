const fs = require('fs');
const path = require('path');
const db = require('../db.js');

const basename = path.basename(__filename);
const models = {};
const { Sequelize, DataTypes } = require("sequelize");



models.conn = db();

fs.readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = models.conn.import(path.join(__dirname, file));
    const name = file.split('.')[0];
    models[name] = model;
  });

const {
  Product,
  Category,
  User,
  Orders,
  OrderProduct

} = models;




// Add model relationships here
Product.belongsToMany(Category, { through: 'product_categories' })
Category.belongsToMany(Product, { through: 'product_categories' })
User.hasMany(Orders)
Orders.belongsToMany(Product, { through: OrderProduct })
Product.belongsToMany(Orders, { through: OrderProduct })

module.exports = models;
