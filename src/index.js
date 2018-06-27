import http from 'http';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server';

import App from './App.js';
import ErrorBoundary from './components/ErrorBoundary.js';
import * as texts from './constants/pageTexts';

const render = function() {
  ReactDOM.render(<ErrorBoundary message={texts.ERROR_BOUNDARY_APP_MESSAGE}><App /></ErrorBoundary>, 
  document.getElementById('root'));
}

render();

console.log('Server running at http://localhost:3000/');
