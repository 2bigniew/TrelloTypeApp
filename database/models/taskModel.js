const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  username: String,
  taskState: String,
  taskContent: String
});

const TrelloTask = mongoose.model('TrelloTask', taskSchema);

module.exports = TrelloTask;
