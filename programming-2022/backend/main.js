'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const database = require('./database');
const rest = require('./rest');

const app = express();
const port = process.env.PORT || 80;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(cors());

const start = () => {
  database.connect(async () => {
    await database.init();
    await database.fill();
    app.listen(port, () => {
      rest.start(app);
    });
  });
};

module.exports = {
  start,
};
