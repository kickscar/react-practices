const logger = require('../logging');

module.exports = {
    error404: function(req, res) {
        if(req.accepts('html')) {
            res.status(404).render('error/404')
            return;
        }

        /* response(200) json */
        res.status(200).send({
            result: 'fail',
            data: null,
            message: 'unknown request'
        });        
    },
    error500: function(err, req, res, next) {
        logger.error(err.stack);

        if(req.accepts('html')) {
            res.status(500).render('error/500', {
                error: err.stack
            });
            return;
        }

        /* response(200) json */
        res.status(200).send({
            result: 'fail',
            data: null,
            message: err.stack
        });
    }
}