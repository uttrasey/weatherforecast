import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import FiveDayOutlook from './fiveDayOutlook';
import { connect } from 'react-redux';
import * as WeatherActions from '../../actions'
import { Link } from 'react-router'

/**
 * Get the required forecast
 */
const mapStateToProps = (state, ownProps) => {
  const location = ownProps.params.location;
  return { forecast: state.forecast[location] };
}

@connect(mapStateToProps, WeatherActions)
export default class WeatherForecast extends React.Component {

  componentDidMount() {
    this.getForecastIfNeeded(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.getForecastIfNeeded(nextProps);
  }

  getForecastIfNeeded(props) {
    const { location } = props.params;
    if (!props.forecast) {
      props.getForecast(location);
    }
  }

  getForecast() {
    return this.props.forecast ? <FiveDayOutlook forecast={this.props.forecast} /> : <div>Loading...</div> ;
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Weather Forecast</h1>
          <h3>{this.props.params.location}... other locations:</h3>
          <ul>
            <li><Link to={'/London'}>London</Link></li>
            <li><Link to={'/Paris'}>Paris</Link></li>
            <li><Link to={'/Dublin'}>Dublin</Link></li>
          </ul>
        </Jumbotron>
        {this.getForecast()}
      </div>
    )
  }

}

//TODO: be specific
WeatherForecast.propTypes = {
  getForecast: React.PropTypes.any,
  forecast: React.PropTypes.any,
  params: React.PropTypes.any
}
