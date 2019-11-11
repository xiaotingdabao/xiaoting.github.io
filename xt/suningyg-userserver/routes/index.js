var express = require('express');
var router = express.Router();
const MongodbClient = require("mongodb").MongoClient,
  assert = require("assert");
const url = "mongodb://localhost:21104",
  dbName = "admin",
  client = new MongodbClient(url);
var dcode = 0;
router.get('/getuser', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  var data = JSON.stringify(req.query.username);
  var adata = { username: eval(data) };
  MongodbClient.connect(url, function (err, db) {
    if (err) throw err;
    const cc = db.db(dbName);
    let col = cc.collection("suninguser");
    col.find(adata).toArray(function (err, docs) {
      if (JSON.stringify(docs) === '[]') {
        dcode = 0;
      } else {
        dcode = 1;
      }
      res.json(dcode);
    });
  });
});

module.exports = router;