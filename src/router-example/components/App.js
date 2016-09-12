import React from 'react'
import { Link } from 'react-router'

const App = React.createClass({

  render() {
    return (
      <div>
        <ul>
          <li>
              <Link to="/logout">Log out</Link>
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/">Home</Link> </li>
          <li><Link to="/landing">landing</Link> </li>
        </ul>
        {this.props.children}
      </div>
    )
  }

})

module.exports = App
