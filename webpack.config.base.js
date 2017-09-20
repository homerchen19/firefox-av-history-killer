/*eslint-env node*/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: [/node_modules/],
      },
      {
        test: /\.module\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', // eslint-disable-line max-len
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['bundle'],
    }),
    new HtmlWebpackPlugin({
      template: './src/background/background.html',
      filename: 'background.html',
      chunks: ['background'],
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
    }),
  ],
};
