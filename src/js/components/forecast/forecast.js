import React from 'react';
import { nothingWhileLoading } from '../hoc';
import { prop } from 'ramda';

const hasLoaded = prop('data');

const enhance = nothingWhileLoading(hasLoaded);

const Forecast = enhance(({data}) => {
    const icon = data.weather[0].icon;
    return <div><img src={`http://openweathermap.org/img/w/${icon}.png`} /> {data.main.temp} °C</div>;
});

Forecast.propTypes = {
    data: React.PropTypes.shape({
        main: React.PropTypes.shape({
            temp: React.PropTypes.number.isRequired,
            temp_min: React.PropTypes.number.isRequired,
            temp_max: React.PropTypes.number.isRequired
        }),
        weather: React.PropTypes.array
    }).isRequired
}

export default Forecast;
