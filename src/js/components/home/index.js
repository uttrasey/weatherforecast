import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router'
import weather from '../../../assets/images/weather.png';

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
        <p>Try one of our weather forecasts by clicking <Link to={'/London'}>here</Link></p>
        <img src={weather} />
      </div>
    )
  }

}
