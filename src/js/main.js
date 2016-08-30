import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import weatherApp from './reducers'
import Home from './components/home';
import Forecast from './components/forecast';

// set up the store with thunk
const store = createStore(
  weatherApp,
  applyMiddleware(thunk)
);

// routing and sharing of the store
ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Home} />
      <Route path="/:location" component={Forecast} />
    </Router>
  </Provider>
), document.getElementById('root'));
