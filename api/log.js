const express = require('express');
const helmet = require('helmet');
const Logger = require('logdna');

var logger = Logger.setupDefaultLogger(process.env.key);

const app = express();

app.use(helmet());

app.get('*', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.status(200).send('Hi');
});

app.post('*', (req, res) => {
  console.log(req);
  logger.log(req);
});

module.exports = app;
