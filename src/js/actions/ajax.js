// move this somewhere else
const apiKey = '718bb9435bf240481fcee0f2fe73525a';
const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=json&appid=${apiKey}`;

/**
 * @return promise yielding forecast data
 */
export const fetchForecast = (location) => {
  return fetch(weatherUrl).then(response => {
    return response.json();
  });
}
