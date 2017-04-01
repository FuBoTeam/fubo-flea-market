const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    path.resolve(__dirname, 'app/index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: { configFile: './.eslintrc' },
      },
      {
        test: /\.jsx?$/,
        use: ['react-hot-loader', 'babel-loader'],
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/,
      },
      {
        test: /\.[s]?css$/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssNested: true,
              postcssNext: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[name].[ext]',
        },
      },
      {
        test: /\.woff?$/,
        loader: 'url-loader',
        options: { limit: 100000 },
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Flea Market',
      template: path.resolve(__dirname, 'app/index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};
