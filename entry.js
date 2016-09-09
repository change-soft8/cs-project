import React from 'react'
import ReactDOM from "react-dom";
import { Router, Link, browserHistory, Route, IndexRoute } from 'react-router'
import App from './src/components/App'
import About from './src/components/About'
import Index from './src/components/Index'

const e = document.createElement('div');
e.id = 'app';
document.body.appendChild(e);

ReactDOM.render((
    <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), e);
