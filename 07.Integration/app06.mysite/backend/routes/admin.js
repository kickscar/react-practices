const express = require('express');
const mainController = require('../controllers/admin/main');
const guestbookController = require('../controllers/admin/guestbook');
const boardController = require('../controllers/admin/board');
const userController = require('../controllers/admin/user');

const router = express.Router();

router.route('').get(mainController.index);
router.route('/main/update').post(mainController.update);

router.route('/user').get(userController.index);
router.route('/board').get(boardController.index);
router.route('/guestbook').get(guestbookController.index);

module.exports = router;