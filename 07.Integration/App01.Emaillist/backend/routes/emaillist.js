const express = require('express');
const controller = require('../controllers/emaillist');

const router = express.Router();
router.route('').get(controller.readAll);
router.route('').post(controller.create);

module.exports = router;