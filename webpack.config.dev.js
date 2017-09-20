/*eslint-env node*/

const webpack = require('webpack');
const merge = require('webpack-merge');
const WriteFilePlugin = require('write-file-webpack-plugin');

const config = require('./webpack.config.base');

module.exports = merge.smart(config, {
  devtool: 'eval',
  entry: {
    bundle: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/index.js',
    ],
    background: './src/background/background.js',
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new WriteFilePlugin({
      // exclude hot-update files
      test: /^(?!.*(hot)).*/,
    }),
  ],
  devServer: {
    hot: true,
    contentBase: './dist',
    port: 3000,
  },
});
