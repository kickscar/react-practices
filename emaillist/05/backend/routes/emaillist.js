const express = require('express');
const controller = require('../controllers/emaillist');

const router = express.Router();


router.route('').options((req, res, next) => {
    res
        // .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Headers', req.get('Access-Control-Request-Headers'))
        .set('Access-Control-Allow-Methods', req.get('Access-Control-Request-Method'))
        .set('Access-Control-Allow-Origin', ...['http://localhost:9999', 'http://localhost:9090'].filter((o) => req.headers.origin === o))
        .set('Access-Control-Allow-Credentials', true)
        .send();
});

router.route('').get(controller.readAll);
router.route('').post(controller.create);

module.exports = router;