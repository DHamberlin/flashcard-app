var mongoose = require('mongoose');

// mongoose.connect('mongodb://demo:demo@ds117821.mlab.com:17821/flashcards');

const db = mongoose.createConnection('mongodb://demo:demo@ds117821.mlab.com:17821/flashcards');

db.on('error', (err) => {console.error(err)});
db.on('open', () => console.log('Mongoose connected'));

module.exports = db;
