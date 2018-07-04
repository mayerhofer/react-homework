const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');

const env = process.env.NODE_ENV;
const isDev = env === 'development';

module.exports = merge(common, {
    name: 'client',
    target: 'web',
    entry: [
        'babel-polyfill',
        isDev && 'webpack-hot-middleware/client',
        './src/client/index.js',
    ].filter(Boolean),
    plugins:
    [
        !isDev && new CleanWebpackPlugin('./dist', {
            root: __dirname,
        }),
        isDev && new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            title: 'React Homework',
            hash: true,
            template: './client/index.html',
        }),
    ].filter(Boolean),
});
