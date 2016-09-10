const path = require('path');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    javascript: [
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, 'app/index.js'),
    ],
    html: path.resolve(__dirname, 'app/index.html'),
  },
  output: {
  	path: path.resolve(__dirname, 'build'),
   	filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    preLoaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'eslint',
      },
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'resolve-url',
          'sass',
        ],
      },
      {
        test: /\.css$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        ],
      },
      {
        test: /\.(jpg|gif|png)$/,
        loader: 'url?limit=25000',
        exclude: /node_modules/,
      },
      {
        test: /\.woff?$/,
        loader: 'url?limit=100000',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file',
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
    ],
  },
  eslint: {
    configFile: './.eslintrc',
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    // new ExtractTextPlugin('app.css', {
    //   allChunks: true
    // })
    // new DashboardPlugin()
  ],
};
