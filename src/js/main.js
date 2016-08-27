import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
      <Route path="/" component={Home} />
  </Router>
), document.getElementById('root'));
