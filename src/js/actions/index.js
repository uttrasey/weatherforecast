import { fetchForecast } from './ajax';

/**
 * Get forecast action
 */
export const getForecast = (location) => {
  return function (dispatch) {
    return fetchForecast(location).then(
      forecast => dispatch(deliverForecast(location, forecast))
    );
  };
}

function deliverForecast(location, forecast) {
  return {
    type: 'NEW_FORECAST',
    location,
    forecast
  };
}
