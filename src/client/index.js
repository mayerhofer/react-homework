import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter } from 'react-router-dom';

import AppCreator from './components/App';
import configureStore from './store/configureStore';

const root = () => {
    const store = configureStore();
    const context = {};
    const location = '';
    const App = AppCreator(StaticRouter, context, location, store);
    return (<App />);
};

ReactDOM.hydrate(root, document.getElementById('app'));
