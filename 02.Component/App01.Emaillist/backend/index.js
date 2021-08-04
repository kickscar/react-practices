(function(){
    const express = require('express');
    const session = require('express-session');
    const http = require('http');
    const path = require('path');
    const dotenv = require('dotenv');

    // 1. Environment Variables
    dotenv.config({path: path.join(__dirname, 'config/app.env')})
    dotenv.config({path: path.join(__dirname, 'config/db.env')})

    // 2. Application Routers
    const { applicationRouter } = require('./routes');

    // 3. Logger
    const logger = require('./logging');

    // 4. Application Setup
    const application = express()
        // 4-1. Session Environment
        .use(session({
            secret: 'emaillist-session',
            resave: false,
            saveUninitialized: false
        }))
        // 4-2. Body Parsers
        .use(express.json())
        .use(express.urlencoded({extended: true}))
        // 4-3. Multipart
        // .use(multer({dest: path.join(__dirname, process.env.MULTER_TEMPORARY_STORE)}).single('file'))
        // 4-4. Static
        .use(express.static(path.join(__dirname, process.env.STATIC_RESOURCES_DIRECTORY)))
        // 4-5. View Engine Setup
        .set('views', path.join(__dirname, 'views'))
        .set('view engine', 'ejs');

    // 5. Application Router Setup
    applicationRouter.setup(application);

    // 6. Server Startup
    http.createServer(application)
        .on('listening', function(){
            logger.info('Listening on port ' + process.env.PORT );
        })
        .on('error', function(error) {
            if(error.syscall !== 'listen') {
                throw error;
            }
            switch(error.code) {
                case 'EACCES':
                    logger.error('Port ' + process.env.PORT  + ' requires elevated privileges');
                    process.exit(1);
                    break;
                case 'EADDRINUSE':
                    logger.error('Port ' + process.env.PORT  + ' is already in use');
                    process.exit(1);
                    break;
                default:
                    throw error;
            }
        })
        .listen(process.env.PORT);
})();






/*
const http = require('http');
const path = require('path');
const express = require('express');

const emaillistRouter = require('./routes/emaillist');
const port = 8080;

// Application Setup
const application = express()
    // 1. static serve 
    .use(express.static(path.join(__dirname, 'public')))
    // 2. request body parser
    .use(express.urlencoded({extended: true})) // application/x-www-form-urlencoded
    .use(express.json())                       // application/json
    // 3. view engine setup
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    // 4. request router
    .all('*', function(req, res, next) {
        res.locals.req = req;
        res.locals.res = res;
        next();
    })
    .use('/', emaillistRouter);

// Server Setup    
http.createServer(application)
    .on('listening', function(){
        console.info(`Http Server running on port ${port}`);
    })
    .on('error', function(error){
        if(error.syscall !== 'listen'){
            throw error;
        }
        switch(error.code){
            case 'EACCESS':
                console.error(`Port:${port} requires privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(`Port:${port} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;        
        }
    })
    .listen(port);

 */