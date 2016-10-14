import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router } from 'react-router'
import "./style/global.css"

import withExampleBasename from '../cfg/withExampleBasename'
import routes from './config/routes'

render((
  <Router
    history={withExampleBasename(browserHistory)}
    routes={routes}
  />
), document.getElementById('example'))
