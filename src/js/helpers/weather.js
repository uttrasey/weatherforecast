import moment from 'moment';

/**
 * Manipulate the forecast data into groupings by day for convenience.
 *
 * Assumes chronological data points.
 */
export const groupForecastsByDay = (forecast) => {
    const data = [];
    let currentDay = null;

    forecast.list.map((point) => {
        const forecastMoment = moment(point.dt_txt);
        const forecastDay = forecastMoment.format('ddd, MMM Do');
        const forecastTime = forecastMoment.format('HH:mm:ss');

        if (forecastDay != currentDay) {
            data.push({
                name: forecastDay,
                forecasts: {}
            });
            currentDay = forecastDay;
        }

        data[data.length - 1].forecasts[forecastTime] = point;
    });
    return data;
}
