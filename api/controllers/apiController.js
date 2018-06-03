const Tasks = require('../../database/models/taskModel');
const Users = require('../../database/models/userModel');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

module.exports = function(app) {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/:username', function(req, res) {

    Tasks.find({ username: req.params.username}, function(err, results){
      if(err) throw err;
      res.send(results);
    });
  });

  app.get('/:username/:pass', function(req, res) {

    Users.find({ username: req.params.username, pass: req.params.pass }, function( err, results){
      if (err) throw err;
      res.send(results);
    });
  });

  app.post('/tasks/:id', function(req, res) {

    Tasks.findById( mongoose.Types.ObjectId(req.params.id), function(err, results) {
      if (err) throw err;
      res.send(results);
    });
  });

  app.post('/:id/:taskState', function(req, res) {
    Tasks.findByIdAndUpdate({ _id: req.params.id }, { taskState: req.params.taskState }, function ( err, results ) {
      if (err) throw err;
      res.send(results);
    });
  });

  app.delete('/delete/:id', function(req, res) {
    Tasks.findByIdAndRemove( mongoose.Types.ObjectId(req.params.id), function(err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
}
