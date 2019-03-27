const express = require('express');
let app = express();
const bodyParser = require('body-parser');

const db = require('../database/index');

app.use(express.static(__dirname + '/../client/dist/'));
app.use(bodyParser.text());

app.get('/similarHomes', (req, res) => {

});


let port = 3000;

app.listen(port);