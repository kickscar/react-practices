const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'assets/js/main.js'
    },
    module: {
        rules:[{
            test: /\.(c|sa|sc)ss$/i,
            use:['style-loader', 'css-loader', 'sass-loader']
        }]        
    },     
    devServer: {
        host: '0.0.0.0',
        port: 9090,
        liveReload: true,
        compress: true,
        hot: false
    }        
}