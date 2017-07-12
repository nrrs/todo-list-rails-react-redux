
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
import configureStore from './store/store.js';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root );

});


const store = configureStore();
window.store = store;
