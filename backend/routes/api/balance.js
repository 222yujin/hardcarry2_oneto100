const express = require('express');
const router = express.Router();
const balanceController = require('../../controllers/back-balance')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a balance');
});

module.exports = router;
