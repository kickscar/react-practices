const model = require('../models/kanban');

module.exports = {
    readAllCards: async function(req, res, next) {
        try {
            const result = await model.findAllCards();
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
    createTask: async function(req, res, next) {
        try {
            let task = req.body;

            console.log(`cardNo: ${ req.params['cardNo'] }에 task name: ${ task.name } 추가`);

            task.no = Date.now();
            res.status(200)
                .send({
                    result: 'success',
                    data: task,
                    message: null
                });
        } catch(err){
            next(err);
        }
    }
}