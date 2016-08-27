/**
 * The AJAX piece, TODO: inject the location/do this cleaner
 */
const fetchForecast = (location) => {
  return fetch('http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=json&appid=718bb9435bf240481fcee0f2fe73525a');
}

/**
 * Get forecast action
 */
export const getForcast = (location) => {

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
