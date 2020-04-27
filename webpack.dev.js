const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode:'development',
  devtool:'inline-source-map',
  devServer: {
    host:'0.0.0.0',
    contentBase:path.join(__dirname, 'resources'),
    hot:true,
    inline:true,
    port:3020,
    historyApiFallback:true,
    public:'0.0.0.0',
    publicPath:'/',
    disableHostCheck:true
  }
});
