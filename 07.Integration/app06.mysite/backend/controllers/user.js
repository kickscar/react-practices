const models = require('../models');
const logger = require('../logging');

module.exports = {
    joinsuccess: function(req, res) {
        res.render('user/joinsuccess');
    },
    join: function(req, res) {
        res.render('user/join');
    },
    _join: async function(req, res, next) {
        try { 
            await models.User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                gender: req.body.gender
            });
            res.redirect('/user/joinsuccess');
        } catch(e) {
            next(e);
        }   
    },
    login: function(req, res){
        res.render('user/login');
    },    
    _login: async function(req, res, next) {
        try {        
            const user = await models.User.findOne({
                attributes: ['no', 'name', 'role'],
                where: {
                    email: req.body.email,
                    password: req.body.password
                }
            });

            if(user == null) {
                res.render('user/login', Object.assign(req.body, {
                    result: "fail"
                }));
                return;
            }

            // 로그인
            req.session.authUser = user;
            res.redirect('/');
        } catch(e) {
            next(e);
        }        
    },
    logout: async function(req, res, next) {
        try {
            // 로그아웃
            await req.session.destroy();
            res.redirect('/');
        } catch(e) {
            next(e);
        }
    },
    update: async function(req, res, next) {
        try {
            const user = await models.User.findOne({
                attributes: ['no', 'email', 'name', 'gender'],
                where: {
                    no: req.session.authUser.no
                }
            });
            res.render("user/update", { user });
        } catch(e) {
            next(e);
        }
    },
    _update: async function(req, res, next) {
        try {
            const {[req.body.password == '' ? 'password' : '']: remove, ...updateObject} = req.body;
            await models.User.update(updateObject, {
                where: {
                    no: req.session.authUser.no    
                }
            });
            res.redirect("/user/update");
        } catch(e) {
            next(e);
        }    
    }
}