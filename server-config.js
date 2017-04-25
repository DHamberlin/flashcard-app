const express = require('express');
const db = require('./db-config');
const http = require('http');
const request = require('request');
// const url = require('url');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client'));
// app.use(express.json());
// app.use(express.urlencoded());

app.post('/images', (req, res) => {
  console.log('recieved');
  let query = req.body.data;

  let options = {
    "method": "GET",
    "hostname": "api.giphy.com",
    "port": null,
    "path": `/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`,
    "headers": {
      "cache-control": "no-cache",
      "postman-token": "869209ce-5ce1-da50-5537-fe5075ae6c9b"
    }
  };

  let call = http.request(options, function (response) {
    let chunks = [];
    response.on("data", function (chunk) {
      chunks.push(chunk);
    });

    response.on("end", function () {
      let body = Buffer.concat(chunks);
      res.status(200);
      res.send(body);
    });
  });

  call.end();
})



module.exports = app;
