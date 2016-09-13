import React from 'react'
import { render } from 'react-dom'
import { hashHistory, Router } from 'react-router'

import withExampleBasename from '../withExampleBasename'
import routes from './config/routes'
console.info(routes)
render((
  <Router
    history={withExampleBasename(hashHistory)}
    routes={routes}
  />
), document.getElementById('example'))
