const models = require('../models');
const logger = require('../logging');

module.exports = {
    checkemail: async function(req, res) {
        const user = await models.User.findOne({
            attributes: ['no'],
            where: {
                email: req.query.email || ''
            }
        });
        res.send({
            result: "success",
            data: user !== null,
            message: null
        });
    }
}