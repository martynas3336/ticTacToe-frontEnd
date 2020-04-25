const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const RobotstxtPlugin = require('robotstxt-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    '@babel/polyfill',
    './src/index.jsx',
  ],

  output: {
    path:path.join(__dirname, '/dist'),
    filename:'[name].bundle.js',
    publicPath:'/',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  module: {
    rules: [
      { // TSX & jsX
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      { // IMAGES
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/img',
          },
        },
      },
      { // FONTS
        test: /\.(otf|ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/fonts',
        },
      },
      { // HTML
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true,
          },
        },
      },
      { // SASS / SCSS / CSS
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          {
            loader:'postcss-loader',
            options: {
              ident:'postcss',
              plugins: [
                autoprefixer()
              ],
            },
          },
          'sass-loader'
        ]
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template:'./resources/index.html',
      filename:'./index.html',
      hash:true,
    }),
    new MiniCssExtractPlugin({
      filename:'assets/css/[name].css'
    }),
    new RobotstxtPlugin({
      filePath:'./robots.txt',
    })
  ]
};
