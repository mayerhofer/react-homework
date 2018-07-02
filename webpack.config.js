const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const clientConfig = (env) => {
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
                {
                    test: /\.(jp(e*)g|png|svg)$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 8000, // Convert images < 8kb to base64 strings
                            name: 'images/[hash]-[name].[ext]',
                            publicPath: url => url.replace('/public/', ''),
                        },
                    }],
                },
            ],
        },
    };
};

const serverConfig = (env) => {
    return {
        entry: [
            'babel-polyfill',
            './src/server/index.js'],
        mode: env.devOrProdMode, // 'development', 'production' or 'none'
        target: 'node',
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'server.js',
            libraryTarget: 'commonjs2',
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        devtool: (env.devOrProdMode === 'production') ? 'none' : 'source-map',
        externals: ['express', 'encoding'],
        module: {
            rules: [
                {
                    test: /\.(jp(e*)g|png|svg)$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 8000, // Convert images < 8kb to base64 strings
                            name: 'images/[hash]-[name].[ext]',
                            publicPath: url => url.replace('/public/', ''),
                            emit: false,
                        },
                    }],
                },
                {
                    test: [/\.css$/, /\.scss$/],
                    loaders: ['css-loader/locals'],
                },
                {
                    test: [/\.js$/, /\.es6$/],
                    exclude: /node_modules/,
                    include: path.join(__dirname, 'src'),
                    loader: 'babel-loader',
                    query: {
                        presets: ['env', 'react', 'es2015'],
                    },
                },
            ],
        },
    };
};

module.exports = [clientConfig, serverConfig];
