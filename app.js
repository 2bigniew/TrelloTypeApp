const express = require('express');
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const connection = require('./database/connection');
const setupTaskController = require('./api/controllers/setupTaskController');
const setupUserController = require('./api/controllers/setupUserController');
const apiController = require('./api/controllers/apiController');

const app = express();

mongoose.connect(connection.getDbConnectionString());

app.use(express.static(__dirname));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

setupTaskController(app);
setupUserController(app);
apiController(app);

app.get('/', function(req, res) {
  res.render('index');
});

module.exports = app;
