import http from 'http';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server';
import App from './App.js';

const render = function() {
  ReactDOM.render(<App />, 
  document.getElementById('root'));
}

render();

console.log('Server running at http://localhost:3000/');
