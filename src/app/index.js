import { createStore } from 'redux';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// Provider is a react component that allows you to use context.
// Way to provide data across tree
import App from './app';
import RootReducer from './reducers';
// Reducer is a function gets the original state and action dispatched
// and returns a new state with new data
let store = createStore(RootReducer);

let rootElement = document.getElementById('app-root');

render (
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

// store.subscribe(function(state) {

// });
