import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router'

/**
 * Screen showing the user how to get a forecast.
 */
export default class Home extends React.Component {

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Weather Forecast</h1>
        </Jumbotron>
        <p>Try on of the following weather forecasts</p>
        <ul>
          <li><Link to={'/London'}>London</Link></li>
        </ul>
      </div>
    )
  }

}
