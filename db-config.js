var mongoose = require('mongoose');

mongoose.connect('mongodb://ds117821.mlab.com:17821/flashcards');

const db = mongoose.connection;

db.on('error', (err) => {console.error(err)});
db.on('open', () => console.log('Mongoose connected'));

module.exports = db;
