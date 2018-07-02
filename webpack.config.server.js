const path = require('path');

module.exports = (env) => {
    return {
        entry: [
            'babel-polyfill',
            './src/server/index.js'],
        mode: env.devOrProdMode, // 'development', 'production' or 'none'
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
                    query: {
                        presets: ['env', 'react', 'es2015'],
                    },
                },
            ],
        },
    };
};
