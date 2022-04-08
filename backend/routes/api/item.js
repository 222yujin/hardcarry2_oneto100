const express = require('express');
const router = express.Router();
const itemController = require('../../controllers/back-item')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with item ');
});

router.get('/getItems',itemController.getItems);

module.exports = router;
