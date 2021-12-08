const models = require('../../models');

module.exports = {
    index: function(rea, res, next) {
        res.render('admin/guestbook');
    }
}