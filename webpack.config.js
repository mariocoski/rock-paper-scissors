var webpack = require('webpack');
var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports = {
  entry: path.resolve(__dirname, 'app/app.js'),
  
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'build.js'
  },
  watch: true,
  module: {
    loaders: [
      {test: /\.js$/, exclude: [node_modules_dir], loader: "babel", query: {presets:['react', 'es2015']}},
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
};
