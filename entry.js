import React from 'react'
import ReactDOM from "react-dom";
import { Router, Link, hashHistory, Route, IndexRoute } from 'react-router'
import App from './src/router-example/components/App'
import About from './src/router-example/components/About'
import Home from './src/router-example/components/Home'
import Landing from './src/router-example/components/Landing'
import Logout from './src/router-example/components/Logout'

const e = document.createElement('div');
e.id = 'app';
document.body.appendChild(e);

ReactDOM.render((
    <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/landing" component={Landing}/>
      <Route path="/logout" component={Logout}/>
    </Route>
  </Router>
), e);
