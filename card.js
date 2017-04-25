const db = require('./db-config');
const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  front: String,
  back: String,
  example: String
});

const Card = db.model('Card', cardSchema);

module.exports = Card;
