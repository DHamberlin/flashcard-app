const express = require('express');
const db = require('./db-config');
const http = require('http');
const request = require('request');
const bodyParser = require('body-parser');
const Card = require('./card');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client'));

app.post('/images', (req, res) => {
  console.log('get images request');
  console.log(req.body.data)
  let query = req.body.data;

  var options = { method: 'GET',
    url: 'http://api.giphy.com/v1/gifs/search',
    qs: { q: query, api_key: 'dc6zaTOxFJmzC' },
    headers:
     { 'postman-token': '7bd7a19c-395f-7a45-a66b-9c47959521ed',
       'cache-control': 'no-cache' } };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.status(200);
    res.send(body);
  });
})

app.post('/create', (req, res) => {
  console.log('create request')
  console.log(req.body.data)
  console.log(typeof req.body)

  let newCard = new Card({
    front: req.body.data.pic,
    back: req.body.data.word,
    example: req.body.data.example
  });
  newCard.save( (err, card) => {
    if (err) {
      console.log('ERROR! ',err);
      res.status(500);
      res.send(err);
    }
    else {
      res.status(200);
      res.send(card);
    }
  })
})

app.get('/cards', (req, res) => {
  Card.find({}, (err, cards) => {
    if (err) {
      console.log(err)
      res.status(404);
      res.send();
    } else {
      res.status(200);
      res.send(cards);
    }
  })
})



module.exports = app;
