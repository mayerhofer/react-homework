import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import AppCreator from '../client/components/App';
import configureStore from '../client/store/configureStore';

const page = (html, state) => `<!DOCTYPE html>
<html>
    <head>
        <title>React HomeWork - Movie Search</title>
    <body>
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
            renderToString(<App store={store} />),
            state,
        ));
    });

    renderToString(<App />);

    store.close();
};
