import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import AppCreator from '../client/components/App';
import configureStore from '../client/store/configureStore';

const page = (html, state) => `<!DOCTYPE html>
<html>
    <head>
        <title>React HomeWork - Movie Search</title>

        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

        <!-- Optional theme -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    <body bgcolor="black">
        <div id="app">${html}</div>
        <script>
            window.PRELOADED_STATE = ${JSON.stringify(state)};
        </script>
        <script src="/build/bundle.js"></script>
    </body>
</html>`;

export default (req, res) => {
    const store = configureStore();
    const context = {};
    const location = req.url;
    const App = AppCreator(StaticRouter, context, location, store);

    store.subscribe(() => { console.log(store.getState()); });
    store.runSaga().done.then(() => {
        const state = store.getState();

        res.send(page(
            renderToString(<App />),
            state,
        ));
    });

    renderToString(<App />);

    store.close();
};
