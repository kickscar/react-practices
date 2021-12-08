const models = require('../models');
const moment = require('moment');

module.exports = {
    index: async function(req, res, next) {
        try { 
            const results = await models.Guestbook.findAll({
                attributes: ['no', 'name', 'message', 'regDate'],
                order: [
                    ['no', 'DESC']
                ]
            });
            res.render('guestbook/index', {
                guestbooks: results,
                moment: moment
            });
        } catch(e) { 
            next(e);
        }         
    },
    spalanding: function(req, res, next){
        res.render('guestbook/spa-landing');
    },
    delete: function(req, res) {
        res.render('guestbook/delete');
    },
    _delete: async function(req, res, next) {
        try { 
            await models.Guestbook.destroy({
                where: req.body
            });
            res.redirect('/guestbook');
        } catch(e) {
            next(e);
        }   
    },
    add: async function(req, res, next) {
        try {        
            await models.Guestbook.create(req.body);
            res.redirect('/guestbook');
        } catch(e) {
            next(e);
        }        
    }
}