import { fetchForecast } from './ajax';

/**
 * Get forecast action
 */
export const getForecast = (location) => {
  return function (dispatch) {
    return fetchForecast().then(
      forecast => dispatch(deliverForecast(forecast))
    );
  };
}

function deliverForecast(forecast) {
  return {
    type: 'NEW_FORECAST',
    forecast
  };
}
