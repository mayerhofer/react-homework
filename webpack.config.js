var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {

    return {
        entry: ['./src/index.js'],
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
            })
        ],
        watch: true,
        devServer: {
            contentBase: path.join(__dirname, 'build'),
            compress: true,
            port: 3000
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    include: path.join(__dirname, 'src'),
                    loader: 'babel-loader',
                    query: {
                        presets: ['env', 'react']
                    }
                },
                {
                    test: /\.css$/,
                    loaders: ['style-loader!css-loader']
                }
            ]
        }
    }
}
