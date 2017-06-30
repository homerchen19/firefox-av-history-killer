/*eslint-env node*/

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
	devtool: 'eval-cheap-module-source-map',
	entry: {
		bundle: [
			'react-hot-loader/patch',
			'webpack-dev-server/client?http://localhost:3000',
			'webpack/hot/only-dev-server',
			'./src/index.js'
		],
    background: './src/background/background.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
	},
	module: {
    rules: [
			{
				test: /\.(js|jsx)$/,
				use: ['babel-loader', 'eslint-loader'],
				exclude: [/node_modules/]
			},
			{
				test: /^((?!\.module).)*\.css$/,
				loaders: [
          'style-loader',
          'css-loader?sourceMap',
        ],
				include: [
          path.resolve(__dirname, 'src'),
        ],
			},
      {
        test: /\.module\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', // eslint-disable-line max-len
        ],
        exclude: /node_modules/,
      },
		]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: "index.html",
      chunks: ["bundle"]
    }),
    new HtmlWebpackPlugin({
      template: './src/background/background.html',
      filename: "background.html",
      chunks: ["background"]
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),
    new WriteFilePlugin()
  ],
  devServer: {
    hot: true,
    contentBase: './dist',
    port: 3000
  },
};
