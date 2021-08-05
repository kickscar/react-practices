module.exports = function(role) {
    return function(req, res, next) {
        if(req.session.authUser && (role !== 'ADMIN' || req.session.authUser.role === 'ADMIN')) {
            next();
            return;
        } 
        
        if(req.accepts('html')) {
            res.redirect(req.session.authUser ? '/' : '/user/login');
            return;
        }

        res.status(403).send({
            result: "fail",
            data: null,
            message: "Access Denied"
        });
    }
}
