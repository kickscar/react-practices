module.exports = function(role) {
    return function(req, res, next) {
        if( req.session[process.env.SESSION_AUTH_PROPERTY_NAME] &&
            (role !== process.env.SESSION_AUTH_ADMIN_ROLE_NAME || req.session[process.env.SESSION_AUTH_PROPERTY_NAME].role === process.env.SESSION_AUTH_ADMIN_ROLE_NAME)) {
            next();
            return;
        } 
        
        if(req.accepts('html')) {
            res.redirect(req.session[process.env.SESSION_AUTH_PROPERTY_NAME] ? '/' : process.env.FORM_LOGIN_URL);
            return;
        }

        /* response JSON */
        res.status(403).send({
            result: "fail",
            data: null,
            message: "Access Denied"
        });
    }
}
