// move this somewhere else
const apiKey = '718bb9435bf240481fcee0f2fe73525a';

/**
 * Get forecast URL
 */
const getUrl = location => {
    return `http://api.openweathermap.org/data/2.5/forecast?q=${location}&mode=json&appid=${apiKey}&units=metric`;
}

/**
 * @return promise yielding forecast data
 */
export const fetchForecast = (location) => {
    const url = getUrl(location);
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
    })
    .then(() => {
        console.log('dispatched');
    })
    .then(() => {
        return fetch(url).then(response => {
            return response.json();
        });
    })

}
