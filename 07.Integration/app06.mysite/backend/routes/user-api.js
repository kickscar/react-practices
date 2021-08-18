const express = require('express');
const authorized = require('./authorized');
const controller = require('../controllers/user-api');

const router = express.Router();
router.route('/checkemail').get(controller.checkemail);

router.route('/needauth').get(authorized, function(req, res){
    res.send({
        result: "success"
    });
});

router.route('/error').get(function(req, res, next){
    try{
        throw new Error('BROKEN');
    } catch(err) {
        next(err);
    }
});


module.exports = router;