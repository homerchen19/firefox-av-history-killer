/*eslint-env node*/

const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = require('./webpack.config.base');

module.exports = merge.smart(config, {
  devtool: 'cheap-module-source-map',
  entry: {
    bundle: ['babel-polyfill', './src/index.js'],
    background: ['babel-polyfill', './src/background/background.js'],
  },
  plugins: [
    new UglifyJSPlugin({
      compress: {
        unused: true,
        warnings: false,
      },
      sourceMap: true,
    }),
  ],
});
