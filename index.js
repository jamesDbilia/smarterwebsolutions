const express = require('express');
const winston = require('winston');
const app = express();
const port = process.env.PORT || 5000;
require('./startup/routes')(app);

const server = app.listen(port, () => winston.info(`Connected to ${port}`));

module.exports = server;
