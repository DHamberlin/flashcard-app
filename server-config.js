const express = require('express');
const db = require('./db-config')

const app = express();

app.use(express.static(__dirname + '/client'));

module.exports = app;
