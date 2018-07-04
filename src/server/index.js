import express from 'express';
import fetch from 'node-fetch';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';

import webpackConfig from '../../webpack.config';
import html from './html';

Object.assign(global, {
    fetch,
    Headers: fetch.Headers,
});

const app = express();
const port = 4000;

if (process.env.NODE_ENV === 'development') {
    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {
        serverSideRender: true,
    }));
    app.use(webpackHotMiddleware(compiler.compilers.find(c => c.name === 'client')));
    app.use(webpackHotServerMiddleware(compiler));
} else {
    // const serverRenderer = require('../public/js/serverRenderer').default;

    app.use(express.static('./build'));
    app.use(html);
}

app.listen(port, () => {
    console.log(`listening on ${port}...`);
});
