'use strict';

const { promisify } = require('util');
let database;

const UserQueries = {};
const MovieQueries = {};
const CategoryQueries = {};
const WatchlistQueries = {};

const init = () => {
  database = require('./database').getConnection();
  return {
    UserQueries,
    MovieQueries,
    CategoryQueries,
    WatchlistQueries,
  };
};

UserQueries.add = async (user) => {
  return await promisify(database.run.bind(database))
    (`INSERT INTO users(login, pass) Values('${user.login}', '${user.pass}')`);
};

UserQueries.getOne = async (id) => {
  console.log(database);
  return await promisify(database.get.bind(database))
    (`SELECT * FROM users WHERE id=${id}`);
};

UserQueries.getAll = async () => {
  return await promisify(database.all.bind(database)) 
    ('SELECT * FROM users');
};

UserQueries.update = async (id, user) => {
  return await promisify(database.run.bind(database))
    (`UPDATE users SET login='${user.login}', pass='${user.pass}' WHERE id=${id}`);
};

UserQueries.delete = async (id) => {
  return await promisify(database.run.bind(database))
    (`DELETE FROM users WHERE id=${id}`);
};

MovieQueries.add = async (product) => {
  return await promisify(database.run.bind(database))
    (`INSERT INTO products(name, img_src, price, category_id) Values('${product.name}', '${product.img}', '${product.price}', ${product.category})`);
};

MovieQueries.getOne = async (id) => {
  return await promisify(database.get.bind(database))
    (`SELECT products.id, products.name, products.img_src, products.price, category.name AS category FROM products INNER JOIN category ON products.category_id=category.id WHERE products.id=${id}`);
};

MovieQueries.getAll = async () => {
  return await promisify(database.all.bind(database)) 
    ('SELECT products.id, products.name, products.img_src, products.price, category.name AS category FROM products INNER JOIN category ON products.category_id=category.id');
};

MovieQueries.update = async (id, product) => {
  return await promisify(database.run.bind(database))
    (`UPDATE products SET name='${product.name}', img_src='${product.img}', price='${product.price}', category_id=${product.category} WHERE id=${id}`);
};

MovieQueries.delete = async (id) => {
  return await promisify(database.run.bind(database))
    (`DELETE FROM products WHERE id=${id}`);
};

CategoryQueries.add = async (category) => {
  return await promisify(database.run.bind(database))
   (`INSERT INTO category(name) Values('${category.name}')`);
};

CategoryQueries.getOne = async (id) => {
  return await promisify(database.get.bind(database))
   (`SELECT * FROM category WHERE id=${id}`);
};

CategoryQueries.getAll = async () => {
  return await promisify(database.all.bind(database)) 
   ('SELECT * FROM category');
};

CategoryQueries.update = async (id, category) => {
  return await promisify(database.run.bind(database))
    (`UPDATE category SET name='${category.name}' WHERE id=${id}`);
};

CategoryQueries.delete = async (id) => {
  return await promisify(database.run.bind(database))
    (`DELETE FROM category WHERE id=${id}`);
};

WatchlistQueries.add = async (watchlist) => {
  return await promisify(database.run.bind(database))
    (`INSERT INTO watchlist(user_id, product_id) Values(${watchlist.user}, ${watchlist.product})`);
};

WatchlistQueries.getOne = async (id) => {
  return await promisify(database.get.bind(database))
    (`SELECT * FROM watchlist WHERE id=${id}`);
};

WatchlistQueries.getAll = async () => {
  return await promisify(database.all.bind(database)) 
    ('SELECT * FROM watchlist');
};

WatchlistQueries.getAllByUser = async (id) => {
  return await promisify(database.all.bind(database)) 
    (`SELECT watchlist.id, products.name, products.img_src, products.price, category.name AS category FROM watchlist INNER JOIN products ON products.id=watchlist.product_id INNER JOIN category ON products.category_id=category.id WHERE watchlist.user_id=${id}`);
};

WatchlistQueries.update = async (id, watchlist) => {
  return await promisify(database.run.bind(database))
    (`UPDATE watchlist SET user_id=${watchlist.user}, product_id=${watchlist.product} WHERE id=${id}`);
};

WatchlistQueries.delete = async (id) => {
  return await promisify(database.run.bind(database))
    (`DELETE FROM watchlist WHERE id=${id}`);
};

module.exports = {
  init,
};
