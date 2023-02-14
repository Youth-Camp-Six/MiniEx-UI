const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  plugins: [new BundleAnalyzerPlugin()],
});
