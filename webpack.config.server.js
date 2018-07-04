const path = require('path');

const env = process.env.NODE_ENV;

module.exports = {
    entry: './src/server/index.js',
    mode: env, // 'development', 'production' or 'none'
    target: 'node',
    watch: true,
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
                test: [/\.css$/, /\.scss$/],
                loaders: ['css-loader/locals'],
            },
            {
                test: [/\.js$/, /\.es6$/],
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader',
            },
        ],
    },
};
