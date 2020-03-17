const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  mode: 'development',
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      { test: /\.m?js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.css$/, use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'postcss-loader' }
      ]}
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: __dirname + "/app/index.html" }),
    new VueLoaderPlugin()
  ],

  devtool: 'eval-source-map',
  devServer: {
    port: 4200,
    contentBase: './public',
    historyApiFallback: true,
    inline: true
  }
};
