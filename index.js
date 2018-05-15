import http from 'http';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server';
import App from './App.js';
import template from './template';

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(template({ body: renderToString(<App />), title: 'React EPAM Homework' }));
}).listen(3000, '127.0.0.1');

console.log('Server running at http://localhost:3000/');
