const express = require('express');
const router = express.Router();
const testController = require('../../controllers/back-test')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a test');
});

module.exports = router;
