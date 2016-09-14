import React from 'react'
import { render } from 'react-dom'
import { hashHistory, Router } from 'react-router'
import "../style/global.css"

import withExampleBasename from '../../cfg/withExampleBasename'
import routes from './config/routes'
console.info(routes)
render((
  <Router
    history={withExampleBasename(hashHistory)}
    routes={routes}
  />
), document.getElementById('example'))
