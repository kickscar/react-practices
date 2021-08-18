const errorRouter = require('./error');
const authorized = require('./authorized');
const models = require('../models');

const applicationRouter = {
    setup: async function(application) {
        
        const site = await models.Site.findOne();
 
        application
        .all('*', function (req, res, next) {
            res.locals.req = req;
            res.locals.res = res;
            next();
        })

        .use('/', require('./main'))
        .use('/user', require('./user'))
        .use('/guestbook', require('./guestbook'))
        .use('/gallery', require('./gallery'))
        .use('/admin', authorized('ADMIN'), require('./admin'))
        .use('/api/user/', require('./user-api'))
        .use('/api/guestbook', require('./guestbook-api'))
        
        .use(errorRouter.error404)
        .use(errorRouter.error500)
        
        .siteTitle = site.title;
    }
};

module.exports = { applicationRouter };