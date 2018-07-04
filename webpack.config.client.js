const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const server = require('./webpack.config.server');

const env = process.env.NODE_ENV;

module.exports = merge.smart(server, {
    target: 'web',
    entry: './src/client/index.js',
    mode: env, // 'development', 'production' or 'none'
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 3000,
    },
    module: {
        rules: [
            {
                test: [/\.js$/, /\.jsx?$/, /\.es6$/],
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader',
            },
            {
                test: [/\.css$/, /\.scss$/],
                loaders: ['style-loader!css-loader', 'sass-loader', MiniCssExtractPlugin.loader],
            },
        ],
    },
});
