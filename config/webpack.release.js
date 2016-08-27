var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./index');

module.exports = {
    bail: true,
    cache: false,
    watch: false,
    devtool: 'source-map',

    entry: [
        path.join(config.paths.appSrc, 'main')
    ],

    output: {
        path: config.paths.buildPath,
        filename: 'static/js/[name].[chunkhash:8].js',
        chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js'
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
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)(\?.*)?$/,
                exclude: /node_modules/,
                loader: 'file',
                query: {
                  name: 'static/media/[name].[hash:8].[ext]'
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
          inject: true,
          template: config.paths.appHtml,
          title: 'ACME business',
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
          }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],

    eslint: {
        failOnError: true
    }

};
