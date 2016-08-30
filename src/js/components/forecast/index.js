import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Weather from './weather';
import { connect } from 'react-redux';
import * as WeatherActions from '../../actions'

@connect((state) => ({ forecast: state.forecast }), WeatherActions)
export default class WeatherForecast extends React.Component {

  componentDidMount() {
    const { location } = this.props.params;
    this.props.getForecast(location);
  }

  getForecast() {
    if (this.props.forecast) {
      return (
        <div>
          <p>Here is the 5 day forecast for { this.props.params.location }</p>
          <Weather forecast={this.props.forecast} />
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Weather Forecast</h1>
        </Jumbotron>
        {this.getForecast()}
      </div>
    )
  }

}

WeatherForecast.propTypes = {
  getForecast: React.PropTypes.any,
  forecast: React.PropTypes.any,
  params: React.PropTypes.any
}

export default WeatherForecast;
