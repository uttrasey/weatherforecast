import React from 'react';

/**
 * Stateless component to render a single forecast point in time.
 */
const Forecast = ({data}) => {
  return <div>Forecast for {data.dt_txt}: min/max {data.main.temp_min}/{data.main.temp_max} </div>;
}

Forecast.propTypes = {
  data: React.PropTypes.shape({
    dt: React.PropTypes.number.isRequired,
    main: React.PropTypes.shape({
      temp: React.PropTypes.number.isRequired,
      temp_min: React.PropTypes.number.isRequired,
      temp_max: React.PropTypes.number.isRequired
    }),
    dt_txt: React.PropTypes.string.isRequired
  }).isRequired

}

export default Forecast;
