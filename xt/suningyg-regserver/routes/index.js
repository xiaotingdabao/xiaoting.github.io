//注册功能
var express = require('express');
var router = express.Router();
const MongodbClient = require("mongodb").MongoClient,
  assert = require("assert");
const url = "mongodb://localhost:21104",
  dbName = "admin",
  client = new MongodbClient(url);
var dcode = 0;

router.get('/reguser', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  var data = req.query;
  var arr = [];
  arr.push(data);
  MongodbClient.connect(url, function (err, db) {
    if (err) throw err;
    const cc = db.db(dbName);
    let col = cc.collection("suninguser");
    col.insertMany(arr, function (err, docs) {
      // console.log(err)
      // console.log(docs)
      if (err === null) {
        dcode = 1;
      } else {
        dcode = 0;
      }
      // console.log(dcode)
      res.json(dcode);
    });
  });
});

module.exports = router;


