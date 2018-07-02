const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    return {
        entry: [
            'babel-polyfill',
            './src/client/components/App.js',
            'react-hot-loader/patch',
        ],
        mode: env.devOrProdMode, // 'development', 'production' or 'none'
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
                    query: {
                        presets: ['env', 'react', 'es2015'],
                    },
                },
                {
                    test: [/\.css$/, /\.scss$/],
                    loaders: ['style-loader!css-loader', 'sass-loader', MiniCssExtractPlugin.loader],
                },
            ],
        },
    };
};
