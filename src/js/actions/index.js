const weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=json&appid=718bb9435bf240481fcee0f2fe73525a';

/**
 * The AJAX piece, TODO: make a bit cleaner
 */
const fetchForecast = (location) => {
  return fetch(weatherUrl).then(response => {
    return response.json();
  });
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
