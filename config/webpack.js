var config = require('./index');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {

    devtool: '#inline-source-map',

    entry: [
        'webpack-dev-server/client?http://0.0.0.0:' + config.nodePort,
        'webpack/hot/only-dev-server',
        path.join(config.paths.appSrc, 'main')
    ],

    output: {
        path: config.paths.appSrc,
        pathinfo: true,
        filename: 'static/js/bundle.js',
        publicPath: '/'
    },

    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loader: 'eslint',
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/
            },
            {
                test:/\.(jpg|png)$/,
                loader: 'file?name=static/media/[name].[ext]',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          inject: true,
          template: config.paths.appHtml,
          title: 'ACME business'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        })
    ]

};
