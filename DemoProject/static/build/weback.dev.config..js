const webpackBase = require('./webpack.base.config.js');
const merge = require('webpack-merge');

module.exports = merge(webpackBase, {
    mode: 'development',
    devtool: '#source-map'
})