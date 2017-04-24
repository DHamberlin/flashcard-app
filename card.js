const db = require('./db-config');
const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
  front: String,
  back: String,
  example: String
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
