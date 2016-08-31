import React from 'react';

/**
 * Stateless component to render a single forecast point in time.
 */
const Forecast = ({data}) => {
  const icon = data.weather[0].icon;
  return <div><img src={`http://openweathermap.org/img/w/${icon}.png`} /> {data.dt_txt}: {data.main.temp} °C</div>;
}

Forecast.propTypes = {
  data: React.PropTypes.shape({
    dt: React.PropTypes.number.isRequired,
    main: React.PropTypes.shape({
      temp: React.PropTypes.number.isRequired,
      temp_min: React.PropTypes.number.isRequired,
      temp_max: React.PropTypes.number.isRequired
    }),
    weather: React.PropTypes.array,
    dt_txt: React.PropTypes.string.isRequired
  }).isRequired

}

export default Forecast;
