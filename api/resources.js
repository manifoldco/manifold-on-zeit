const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet());

app.get('*', (req, res) => {
  console.log(process.env);
  res.set('Content-Type', 'text/html');
  res.status(200).send('Hi');
});

module.exports = app;
