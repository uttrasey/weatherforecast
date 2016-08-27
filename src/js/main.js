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
  <Router history={browserHistory}>
      <Provider store={store}>
          <Route path="/" component={Home} />
      </Provider>
  </Router>
), document.getElementById('root'));
