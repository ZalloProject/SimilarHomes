const express = require('express');
let app = express();
const bodyParser = require('body-parser');

const db = require('../database/index');

app.use(express.static(__dirname + '/../client/dist/'));
app.use(bodyParser.json());

app.post('/similarHomes', (req, res) => {
  db.getSimilarHomes(req.body, (err, data) => {
    res.send(data);
  });    
});


let port = 3000;

app.listen(port);