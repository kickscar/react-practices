const model = require('../models/emaillist');

module.exports = {
    readAll: async function(req, res, next) {
        try {
            const result = await model.findAll();
            res
                .set('Access-Control-Allow-Origin', ...['http://localhost:9999', 'http://localhost:9090'].filter((o) => req.headers.origin === o))
                .set('Access-Control-Allow-Credentials', true)
                .send({
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