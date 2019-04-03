const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const testDB = require("../database/testDB");
const db = require("../database/index");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/../client/")));

app.post("/similarHomes", (req, res) => {
  db.getSimilarHomes(req.body, (err, data) => {
    res.send(data);
  });
});

app.post("/test", (req, res) => {
  testDB.getSimilarHomes(req.body, (err, data) => {
    res.send(data);
  });
});

module.exports = app;
