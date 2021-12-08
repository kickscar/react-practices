const express = require('express');
const authorized = require('./authorized');
const controller = require('../controllers/user');

const router = express.Router();
router.route('/joinsuccess').get(controller.joinsuccess);
router.route('/join').get(controller.join);
router.route('/join').post(controller._join);

router.route('/login').get(controller.login);
router.route('/login').post(controller._login);

router.route('/logout').get(controller.logout);

router.route('/update').get(authorized(), controller.update);
router.route('/update').post(authorized(), controller._update);


module.exports = router;