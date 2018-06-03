const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  pass: String,
});

const TrelloUser = mongoose.model('TrelloUser', userSchema);

module.exports = TrelloUser;
