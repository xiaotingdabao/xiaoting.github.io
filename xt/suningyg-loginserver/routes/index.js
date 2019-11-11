var express = require('express');
var router = express.Router();
const MongodbClient = require("mongodb").MongoClient,
  assert = require("assert");
const url = "mongodb://localhost:21104",
  dbName = "admin",
  client = new MongodbClient(url);

router.get('/loginuser', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  var data = req.query;
  MongodbClient.connect(url, function (err, db) {
    if (err) throw err;
    const cc = db.db(dbName);
    let col = cc.collection("suninguser");
    col.find(data).toArray(function (err, docs) {
      res.json(docs);
    });
  });
});

module.exports = router;
