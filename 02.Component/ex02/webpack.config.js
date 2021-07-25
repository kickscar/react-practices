const path = require('path');

module.exports = (env) => {

    const enrty = path.resolve(`src/${env.src}/index.js`);

    return {
        mode: "none",
        entry: enrty,
        output: {
            path: path.resolve('public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                test: /\.css$/i,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { modules: true } }
                ]
            }, {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }, {
                test: /\.(png|gif|jpe?g|svg|ico|tiff?|bmp)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: '/assets/images',
                    publicPath: '/assets/images',
                    name: '[name].[ext]'
                }
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }]
        },
        devtool: "eval-source-map",
        devServer: {
            contentBase: path.resolve('public'),
            watchContentBase: true,
            host: "0.0.0.0",
            port: 9999,
            inline: true,
            liveReload: true,
            hot: false,
            compress: true,
            historyApiFallback: true
        }
    };
}
