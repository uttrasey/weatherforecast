import React from 'react';
import Forecast from './forecast';

const Weather = React.createClass({

  propTypes: {
    forecast: React.PropTypes.any
  },

  getForecast() {
    return this.props.forecast.list.map((item) => {
      return <Forecast key={item.dt} data={item} />
    });
  },

  render() {
    return <div>
      {this.getForecast()}
    </div>;
  }
});

export default Weather;
