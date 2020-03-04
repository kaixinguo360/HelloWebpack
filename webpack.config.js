const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },

  mode: 'development',
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      { test: /\.m?js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          }
        },
        { loader: 'postcss-loader' }
      ]}
    ]
  },
  plugins: [
    new webpack.BannerPlugin('Hello, Webpack'),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: __dirname + "/app/index.html" })
  ],

  devtool: 'eval-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 4200,
    contentBase: './public',
    historyApiFallback: true,
    inline: true
  }
};
