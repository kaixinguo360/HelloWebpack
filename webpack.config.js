const path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },

  mode: 'development',
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },

  devtool: 'eval-source-map',
  devServer: {
    port: 4200,
    contentBase: './public',
    historyApiFallback: true,
    inline: true
  }
};
