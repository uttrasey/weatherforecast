var path = require('path');

module.exports = {
   nodePort: process.env.NODE_PORT || 3000,
   env: process.env.NODE_ENV || 'development',
   paths: {
      buildPath: path.resolve(__dirname, '../build'),
      appHtml: path.resolve(__dirname, '../index.html'),
      appSrc: path.resolve(__dirname, '../src/js')
   }
};
