const express = require('express');
const authorized = require('./authorized');
const controller = require('../controllers/gallery');

const router = express.Router();
router.route('').get(controller.index);
router.route('/delete/:no').get(authorized('ADMIN'), controller.delete);
router.route('/upload').post(authorized('ADMIN'), controller.upload);

module.exports = router;