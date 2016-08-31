import moment from 'moment';

/**
 * Manipulate the forecast data into groupings by day for convenience.
 */
export const groupForecastsByDay = (forecast) => {
  const data = [];
  let currentDay = null;

  forecast.list.map((point) => {
    const forecastDay = moment(point.dt_txt).format('ddd, MMM Do');
    const forecastTime = moment(point.dt_txt).format('HH:mm:ss');

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
