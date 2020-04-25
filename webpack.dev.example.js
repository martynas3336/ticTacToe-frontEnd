const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode:'development',
  devtool:'inline-source-map',
  devServer: {
    contentBase:path.join(__dirname, 'resources'),
    hot:true,
    inline:true,
    port:3001,
    historyApiFallback:true,
    public:'0.0.0.0',
    publicPath:'/',
    allowedHosts:['domain.com'],
  }
});
