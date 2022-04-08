const express = require('express');
const router = express.Router();
const diaryController = require('../../controllers/back-diary')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a diary');
});

module.exports = router;
