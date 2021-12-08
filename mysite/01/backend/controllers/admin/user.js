const models = require('../../models');

module.exports = {
    index: function(req, res, next) {
        res.render('admin/user');
    }
}