const express = require('express');
const db = require('./db-config')

const app = express();

app.use(express.static(__dirname + '/client'));

// app.get('/', (req, res) => {
//   res.status(200);
//   res.sendFile(__dirname + 'client/index.html');
// })

module.exports = app;
