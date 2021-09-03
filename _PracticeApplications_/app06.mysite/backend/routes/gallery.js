const express = require('express');
const authorized = require('./authorized');
const controller = require('../controllers/api/gallery');

const router = express.Router();
router.route('').get(controller.readAll);
router.route('/delete/:no').get(authorized('ADMIN'), controller.delete);
router.route('/upload').post(authorized('ADMIN'), controller.create);

module.exports = router;