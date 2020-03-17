const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './app/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  mode: 'development',
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.ts$/, exclude: /node_modules/, loader: 'ts-loader', options: { appendTsSuffixTo: [/\.vue$/] } },
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
  resolve: {
    extensions: [ '.ts', '.js' ]
  },

  devtool: 'eval-source-map',
  devServer: {
    port: 4200,
    contentBase: './public',
    historyApiFallback: true,
    inline: true
  }
};
