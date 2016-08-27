var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('../config/index');
var webpackConfig = require('../config/webpack');

var server = new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    quiet: true,
    noContentBase: false,
    contentBase: './client',
    historyApiFallback: true
});

server.listen(config.nodePort, 'localhost', function (err, result) {
    if (err) { return console.log(err); }
    console.log('Webpack listening at localhost:' + config.nodePort);
});
