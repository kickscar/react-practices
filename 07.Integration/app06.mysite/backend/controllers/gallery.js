const fs = require('fs');
const path = require('path');
const models = require('../models');

module.exports = {
    index: async function(req, res, next) {
        try {
            const results = await models.Gallery.findAll({
                attributes: ['no', 'url', 'comment'],
                order: [
                    ['no', 'DESC']
                ]
            });

            res.render('gallery/index', {galleries: results});
        } catch (err) {
            next(err);
        }         
    },
    delete: async function(req, res, next) {
        try {
            const results = await models.Gallery.destroy({where: {no: req.params.no}});
            res.redirect('/gallery');
        } catch (err) {
            next(err);
        } 
    },
    upload: async function(req, res, next) {
        try {
            const file = req.file;
            
            if(file) {
                const content = fs.readFileSync(file.path);

                const storeDirectory = path.join(path.dirname(require.main.filename), process.env.STATIC_RESOURCES_DIRECTORY, process.env.UPLOADIMAGE_STORE_LOCATION);
                const storePath = path.join(storeDirectory, file.filename) + path.extname(file.originalname);
                const url = path.join(process.env.UPLOADIMAGE_STORE_LOCATION, file.filename) + path.extname(file.originalname);

                fs.existsSync(storeDirectory) || fs.mkdirSync(storeDirectory);
                fs.writeFileSync(storePath, content, {flag: 'w+'});
                fs.unlinkSync(file.path);

                await models.Gallery.create({
                   url: url.replace(/\\/gi, '/'),
                   comment: req.body.comment || ''
                });
            }

            res.redirect('/gallery');            

        } catch (err) {
            next(err);
        }       
    }
}