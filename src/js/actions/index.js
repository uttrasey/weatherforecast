import { fetchForecast } from './ajax';

const deliverForecast = (location, forecast) => ({
    type: 'NEW_FORECAST',
    location,
    forecast
});

/**
 * Get forecast action
 */
export const getForecast = (location) => {
    return (dispatch) => {
        return fetchForecast(location).then(forecast => dispatch(deliverForecast(location, forecast)));
    };
}
