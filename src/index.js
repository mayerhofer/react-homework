import http from 'http';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server';
import App from './App.js';
import ErrorBoundary from './components/ErrorBoundary.js';

const render = function() {
  ReactDOM.render(<ErrorBoundary message="Error while rendering the application."><App /></ErrorBoundary>, 
  document.getElementById('root'));
}

render();

console.log('Server running at http://localhost:3000/');
