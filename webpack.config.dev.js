const path = require('path');
const webpack = require('webpack');
const postcssNested = require('postcss-nested');
const postcssNext = require('postcss-cssnext');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const routingPaths = [
  '/good/',
];
const scope = { window: {} };

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, 'app/index.js'),
    ],
  },
  output: {
    publicPath: 'http://localhost:8080/',
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  postcss: [
    postcssNested,
    postcssNext,
  ],
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
      test: /\.[s]?css$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'postcss',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff)$/,
        loader: 'url-loader?limit=8192?name=[name].[ext]',
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
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
  eslint: {
    configFile: './.eslintrc',
  },
  plugins: [
    new StaticSiteGeneratorPlugin('app', routingPaths, {}, scope),
    new webpack.NoErrorsPlugin(),
  ],
};
