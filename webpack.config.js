var webpack = require('webpack');
var path = require('path');
// Specify vendor dependencies
const VENDOR_LIBS = [
  'faker', 'lodash', 'react', 'react-dom',
  'react-input-range', 'react-redux', 'react-router',
  'redux', 'redux-form', 'redux-thunk'
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    // Specify second bundle file
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    // Use name from entry
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    // Eliminate duplicate code in bundles
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
};
