import path from 'path';
import express from 'express';
import http from 'http';

const application = express()
    .use(express.static(path.join(path.resolve('.'), 'public')));

http.createServer(application)
    .on('listening', function() {
        console.log('starts.... at 8080');
    })
    .listen(8088);
