const fs = require('fs');
const path = require('path');
const models = require('../../models');

module.exports = {
    index: async function(req, res, next) {
        try {
            const result = await models.Site.findOne({attributes: ['title', 'welcome', 'profile', 'description']});
            res.render('admin/main', {site: result});
        } catch(err) {
            next(err);
        }
    },
    update: async function(req, res, next) {
        try {
            const file = req.file;
            let url = null;

            if(file) {
                const content = fs.readFileSync(file.path);

                const storeDirectory = path.join(path.dirname(require.main.filename), process.env.STATIC_RESOURCES_DIRECTORY, process.env.UPLOADIMAGE_STORE_LOCATION);
                const storePath = path.join(storeDirectory, file.filename) + path.extname(file.originalname);
                url = path.join(process.env.UPLOADIMAGE_STORE_LOCATION, file.filename) + path.extname(file.originalname);

                fs.existsSync(storeDirectory) || fs.mkdirSync(storeDirectory);
                fs.writeFileSync(storePath, content, {flag: 'w+'});
                fs.unlinkSync(file.path);
            }

            await models.Site.update(Object.assign({
                title: req.body.title,
                welcome: req.body.welcome,
                description: req.body.description
            }, url ? {
                profile: url.replace(/\\/gi, '/')
            } : null), {
                where: {
                }
            });

            req.app.siteTitle = req.body.title;

            res.redirect("/admin");
        }  catch(err) {
            next(err);
        }
    }
}