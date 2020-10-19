const path = require('path');

const mode = process.env.NODE_ENV || 'production';

module.exports = {
  mode,
  target: 'webworker',
  entry: {
    'worker/script': './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: '[name].js',
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
