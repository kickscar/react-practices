const model = require('../models/emaillist');

module.exports = {
    readAll: async function(req, res, next) {
        try {
            const result = await model.findAll();
            res.send({
                result: 'success',
                data: result,
                message: null
            });
        } catch(err){
            next(err);
        }
    },
    create: async function(req, res, next) {
        try {
            const result = await model.insert(req.body);
            res.send({
                result: 'success',
                data: result,
                message: null
            });
        } catch(err){
            next(err);
        }
    }
}