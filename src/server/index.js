import express from 'express';
import fetch from 'node-fetch';

import html from './html';

Object.assign(global, {
    fetch,
    Headers: fetch.Headers,
});

const app = express();
const port = 4000;

app.use(express.static('./build/client'));

app.use(html);

app.listen(port, () => {
    console.log(`listening on ${port}...`);
});
