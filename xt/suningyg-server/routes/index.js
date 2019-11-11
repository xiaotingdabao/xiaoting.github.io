var express = require('express');
var router = express.Router();
const {
  find
} = require('../db/db');
/* GET home page. */
router.get('/gettag', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('suning');
  res.json(data);
});

module.exports = router;
