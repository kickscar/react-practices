const models = require('../models');

module.exports = {
    index: async function(req, res) {
        const result = await models.Site.findOne({attributes: ['title', 'welcome', 'profile', 'description']});
        res.render('main/index', {
            site: result
        });
    }
}