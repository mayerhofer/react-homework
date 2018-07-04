const webpack = require('webpack');
const { ReactLoadablePlugin } = require('react-loadable/webpack');

const env = process.env.NODE_ENV;
const isDev = env === 'development';

module.exports = {
    mode: env,
    module: {
        rules: [{
            test: [/\.js?$/, /\.jsx?$/],
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
            }],
        }],
    },
    watch: true,
    output: {
        filename: 'js/[name].js',
        path: `${__dirname}/dist`, // eslint-disable-line no-path-concat
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devtool: !isDev ? false : 'source-map',
    plugins: [
        isDev ? new webpack.NamedModulesPlugin() : new webpack.HashedModuleIdsPlugin(),
        new ReactLoadablePlugin({
            filename: './dist/react-loadable.json',
        }),
    ],
    optimization: {
        splitChunks: {
            name: 'manifest',
            minChunks: Infinity,
        },
    },
};
