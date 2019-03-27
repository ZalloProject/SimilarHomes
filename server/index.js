const express = require('express');
let app = express();
const bodyParser = require('body-parser');

const db = require('../database/index');

app.use(express.static(__dirname + '/../client/dist/'));
app.use(bodyParser.json());

app.post('/similarHomes', (req, res) => {
  //db
  //return results from db
  db.getSimilarHomes(req.body, (err, data) => {

  });    
});


let port = 3000;

app.listen(port);