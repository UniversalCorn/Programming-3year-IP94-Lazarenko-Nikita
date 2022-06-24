'use strict';

const { readFile } = require('fs').promises;
const { promisify } = require('util');

const sqlite3 = require('sqlite3').verbose();

let database;

const files = {
  tables: './backend/database/tables.sql',
  data: './backend/database/data.sql',
};

const options = {
  encoding: 'utf8',
};

const connect = callback => {
  database = new sqlite3.Database('./backend/database/cinema.db', callback);
};

const close = callback => {
  database.close(callback);
};

const getConnection = () => database;

const init = async () => {
  console.log('Database initialization started...');
  const tablesInput = await readFile(files.tables, options);
  const tables = tablesInput.replace(/(\r\n|\n|\r)/gm, '').split(';').filter(entry => entry.length > 0);
  for (const table of tables) {
    console.log(await promisify(database.run.bind(database))(table));
  }
  console.log('Database initialization finished...');
};

const fill = async () => {
  console.log('Database filling started...');
  const dataInput = await readFile(files.data, options);
  const data = dataInput.replace(/(\r\n|\n|\r)/gm, '').split(';').filter(entry => entry.length > 0);
  for (const entry of data) {
    console.log(await promisify(database.run.bind(database))(entry));
  }
  console.log('Database filling finished...');
};

module.exports = {
  connect,
  close,
  getConnection,
  init,
  fill,
};
