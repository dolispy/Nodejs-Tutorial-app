var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  const { name, age, sex } = req.body;
  console.log(name, age, sex);
  res.json({name,age,sex});
});

module.exports = router;
