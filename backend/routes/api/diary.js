const express = require('express');
const router = express.Router();
const diaryController = require('../../controllers/back-diary')

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a diary');
});

router.post('/createDiary', diaryController.createDiary);
router.get('/diaryLike', diaryController.diaryLike);
router.get('/getLatestDiary',diaryController.getLatestDiary);
router.get('/getPopularDiary',diaryController.getPopularDiary);
router.get('/getSearchDiary',diaryController.getSearchDiary)
module.exports = router;
