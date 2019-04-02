const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const path = require('path');

// const db = require('../database/index');
const testDB = require('../database/testDB');

const cors = require('cors');

app.use(cors());

app.use(express.static(path.join(__dirname, '/../client/')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/bundle.js'));
});

app.post('/similarHomes', (req, res) => {
  testDB.getSimilarHomes(req.body, (err, data) => {
    res.send(data);
  });
});

app.post('/test', (req, res) => {
  testDB.getSimilarHomes(req.body, (err, data) => {
    res.send(data);
  });
});

module.exports = app;
