const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.config.common');

module.exports = merge(common, {
    name: 'server',
    target: 'node',
    entry: [
        'babel-polyfill',
        './src/server/index.js',
    ],
    output: {
        path: `${__dirname}/dist`, // eslint-disable-line no-path-concat
        filename: 'index.js',
        libraryTarget: 'commonjs2',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    externals: [nodeExternals()],
});
