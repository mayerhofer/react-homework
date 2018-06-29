import http from 'http';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
import App from './App.js';
import ErrorBoundary from './components/ErrorBoundary.js';
import * as texts from './constants/pageTexts';

const { store, persistor } = configureStore();

window.store = store;
window.persistor = persistor;

store.subscribe(() => { console.log(store.getState()) });

const render = function() {
  ReactDOM.render(
    <ErrorBoundary message={texts.ERROR_BOUNDARY_APP_MESSAGE}>
      <App store={store} persistor={persistor} />
    </ErrorBoundary>, 
  document.getElementById('root'));
}

render();

console.log('Server running at http://localhost:3000/');
