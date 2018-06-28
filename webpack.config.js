const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {

    return {
        entry: [
            'babel-polyfill',
            './src/index.js',
            'react-hot-loader/patch',
        ],
        mode: env.devOrProdMode, // 'development', 'production' or 'none'
        output: {
            path: path.join(__dirname, 'build'),
            filename: 'bundle.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                hash: true,
                title: 'React HomeWork - Movie Search',
                template: './src/index.html',
                filename: './index.html'
            }),
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[id].css'
            })
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
                    test: [/\.js$/,/\.jsx?$/,/\.es6$/],
                    exclude: /node_modules/,
                    include: path.join(__dirname, 'src'),
                    loader: 'babel-loader',
                    query: {
                        presets: ['env', 'react', 'es2015']
                    }
                },
                {
                    test: [/\.css$/,/\.scss$/],
                    loaders: ['style-loader!css-loader', 'sass-loader', MiniCssExtractPlugin.loader]
                },
                {
                    test: /\.(jp(e*)g|png|svg)$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 8000, // Convert images < 8kb to base64 strings
                            name: 'images/[hash]-[name].[ext]'
                        }
                    }]
                }
            ]
        }
    }
}
