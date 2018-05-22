var path = require('path');

module.exports = {
    entry: ['./src/index.js'],
    mode: 'development', // 'production', 'none'
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
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
