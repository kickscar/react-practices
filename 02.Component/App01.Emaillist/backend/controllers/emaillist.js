const model = require('../models/emaillist');

module.exports = {
    index: async function(req, res) {
        const results = await model.findAll();
        res.render('index', {
            list: results || []
        });
    },
    form: function(req, res) {
        res.render('form');
    },
    add: async function(req, res) {
        const results = await model.insert(req.body);
        res.redirect("/");
    }
}