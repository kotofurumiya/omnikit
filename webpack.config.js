const path = require('path');

module.exports = {
  mode: 'production',
  entry: './lib/index.js',
  output: {
    filename: 'omnikit.min.js',
    path: path.resolve('build'),
    library: "",
    libraryTarget: "window",
  }
};