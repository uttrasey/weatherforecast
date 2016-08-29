import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import weatherApp from './reducers'

import Home from './components/home';
import { Router, Route, browserHistory } from 'react-router';

const store = createStore(
  weatherApp,
  applyMiddleware(thunk)
);

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
    </Router>
  </Provider>
), document.getElementById('root'));
