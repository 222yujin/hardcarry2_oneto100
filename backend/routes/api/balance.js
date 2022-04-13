const express = require('express');
const router = express.Router();
const balanceController = require('../../controllers/back-balance')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a balance');
});
router.get('/selectBalance',balanceController.selectBalance)
router.get('/balanceResult',balanceController.balanceResult)
router.get('/replyLike',balanceController.replyLike)
router.post('/createReply',balanceController.createReply)
router.get('/getLatestReply',balanceController.getLatestReply)
router.get('/getPopularReply',balanceController.getPopularReply)
router.get('/getSearchReply',balanceController.getSearchReply)

module.exports = router;
