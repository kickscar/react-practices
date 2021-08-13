const models = require('../models');
const { Op } = require("sequelize");

module.exports = {
    create: async function(req, res, next) {
        try {
            const result = await models.Guestbook.create(req.body);
            res
                .status(200)
                .send({
                    result: 'success',
                    data: result,
                    message: null
                });
        } catch(err){
            next(err);
        }
    },
    read: async function(req, res, next) {
        try {
            const startNo = req.query.sno || 0;
            const results = await models.Guestbook.findAll({
                attributes: ['no', 'name', 'message'],
                where: (startNo > 0) ? {no: {[Op.lt]: startNo}} : {},
                order: [
                    ['no', 'desc']
                ],
                limit: 3
            });

            res
                .status(200)
                .send({
                    result: 'success',
                    data: results,
                    message: null
                });
        } catch(err){
            next(err);
        }
    },
    delete: async function(req, res, next) {
        try {
            const result = await models.Guestbook.destroy({
                where: {
                    [Op.and]: [{no: req.params.no}, {password: req.body.password}]
                }
            });
            res.send({
                result: 'success',
                data: req.params.no,
                message: null
            });
        } catch(err){
            next(err);
        }
    }
}
