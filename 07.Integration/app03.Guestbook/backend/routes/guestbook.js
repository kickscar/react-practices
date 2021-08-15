const express = require('express');
const controller = require('../controllers/guestbook');

const router = express.Router();
router.route('/:startNo((\\d+)?)').get(controller.read);
router.route('/:no').delete(controller.delete);
router.route('').post(controller.create);

module.exports = router;