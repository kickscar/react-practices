const fs = require('fs');
const path = require('path');
const models = require('../models');

module.exports = {
    readAll: async function(req, res, next) {
        try {
            const results = await models.Gallery.findAll({
                attributes: ['no', 'url', 'comment'],
                order: [
                    ['no', 'DESC']
                ]
            });

            res
                .status(200)
                .send({
                    result: 'success',
                    data: results,
                    message: null
                });
        } catch (err) {
            next(err);
        }         
    },
    delete: async function(req, res, next) {
        try {
            const no = req.params.no;
            const results = await models.Gallery.destroy({where: {no: no}});
            res
                .status(200)
                .send({
                    result: 'success',
                    data: no,
                    message: null
                });
        } catch (err) {
            next(err);
        } 
    },
    create: async function(req, res, next) {
        try {
            const file = req.file;
            if(!file) {
                throw new Error('error: no file attached');
            }

            const content = fs.readFileSync(file.path);
            const storeDirectory = path.join(path.dirname(require.main.filename), process.env.STATIC_RESOURCES_DIRECTORY, process.env.UPLOADIMAGE_STORE_LOCATION);
            const storePath = path.join(storeDirectory, file.filename) + path.extname(file.originalname);
            const url = path.join(process.env.UPLOADIMAGE_STORE_LOCATION, file.filename) + path.extname(file.originalname);

            fs.existsSync(storeDirectory) || fs.mkdirSync(storeDirectory);
            fs.writeFileSync(storePath, content, {flag: 'w+'});
            fs.unlinkSync(file.path);

            const result = await models.Gallery.create({
                url: url.replace(/\\/gi, '/'),
                comment: req.body.comment || ''
            });

            res
                .status(200)
                .send({
                    result: 'success',
                    data: result,
                    message: null
                });

        } catch (err) {
            next(err);
        }       
    }
}