import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { initialize } from './routing';

const reactRoot = window.document.getElementById('app');

initialize().then(({ provider }) => {
  ReactDOM.render(provider, reactRoot);
});

if (process.env.NODE_ENV !== 'production') {
  if (!reactRoot.firstChild || !reactRoot.firstChild.attributes ||
      !reactRoot.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.');
  }
}