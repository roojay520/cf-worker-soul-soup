const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const mode = process.env.NODE_ENV || 'production';

module.exports = {
  mode,
  target: 'webworker',
  entry: {
    'dist/worker': './src/index.ts',
    'worker/script': './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: '[name].js',
  },
  devtool: 'cheap-source-map',
  optimization: {
    minimize: false,
    minimizer: [new TerserPlugin({ include: /script/ })],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [],
  },
  module: {
    rules: [
      {
        test: /\.[jt]s$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
