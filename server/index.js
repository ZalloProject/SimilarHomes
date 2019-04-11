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
  db.getSimilarHomes(req.body, (err, data) => res.send(data));
});

app.get("/homes", (req, res) => {
  db.getHomes((err, data) => res.send(data));
});

app.get("/homesByCoord/*", (req, res) => {
  const coords = req.url.split("/")[1].split("&");
  db.getHomesInArea(coords[0], coords[1], coords[2], coords[3], (err, data) =>
    res.send(data)
  );
});

app.post("/test", (req, res) => {
  testDB.getSimilarHomes(req.body, (err, data) => {
    res.send(data);
  });
});

module.exports = app;
