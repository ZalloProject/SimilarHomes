const express = require('express');
let app = express();
const bodyParser = require('body-parser');

// const db = require('../database/index');
const testDB = require('../database/testDB');

app.use(express.static(__dirname + '/../client/dist/'));
app.use(bodyParser.json());

app.post('/similarHomes', (req, res) => {
  db.getSimilarHomes(req.body, (err, data) => {
    res.send(data);
  });    
});

app.post('/test', (req, res) => {
  testDB.getSimilarHomes(req.body, (err, data) => {
    res.send(data);
  });
});

module.exports = app;

