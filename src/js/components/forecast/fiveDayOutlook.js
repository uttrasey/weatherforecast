import React from 'react';
import Forecast from './forecast';
import { Table } from 'react-bootstrap';
import { StyleSheet, css } from 'aphrodite';
import moment from 'moment';

const styles = StyleSheet.create({
    table: {
        margin: 50
    }
});

const Weather = React.createClass({

  propTypes: {
    forecast: React.PropTypes.any
  },

  /**
   * Reduce to give us a day by day data set
   */
  processData() {
    const data = [];
    let currentDay = null;
    this.props.forecast.list.map((forecast) => {
      const forecastDay = moment(forecast.dt_txt).format('ddd, MMM Do');
      const forecastTime = moment(forecast.dt_txt).format('HH:mm:ss');

      if (forecastDay != currentDay) {
        data.push({
          name: forecastDay,
          forecasts: {}
        });
        currentDay = forecastDay;
      }

      data[data.length - 1].forecasts[forecastTime] = forecast;
    });
    return data;
  },

  getForecastsFor(time, data) {
    return data.map(day => {
        const timeForecast = day.forecasts[time];
        if (timeForecast) {
          return (
            <td key={day.name}>
              <Forecast data={timeForecast} />
            </td>
          );
        }
        else {
          return <td key={day.name}></td>;
        }
    });
  },

  render() {
    const weatherData = this.processData().slice(0, 5);;
    const dayHeadings = weatherData.map(day => {
        return <th key={day.name}>{day.name}</th>;
    });
    return (
      <div>
      <Table responsive={true} className={css(styles.table)}>
        <thead>
          <tr>
            <th>Time</th>
            {dayHeadings}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>00:00:00</td>
            {this.getForecastsFor('00:00:00', weatherData)}
          </tr>
          <tr>
            <td>03:00:00</td>
            {this.getForecastsFor('03:00:00', weatherData)}
          </tr>
          <tr>
            <td>06:00:00</td>
            {this.getForecastsFor('06:00:00', weatherData)}
          </tr>
          <tr>
            <td>09:00:00</td>
            {this.getForecastsFor('09:00:00', weatherData)}
          </tr>
          <tr>
            <td>12:00:00</td>
            {this.getForecastsFor('12:00:00', weatherData)}
          </tr>
          <tr>
            <td>15:00:00</td>
            {this.getForecastsFor('15:00:00', weatherData)}
          </tr>
          <tr>
            <td>18:00:00</td>
            {this.getForecastsFor('18:00:00', weatherData)}
          </tr>
          <tr>
            <td>21:00:00</td>
            {this.getForecastsFor('21:00:00', weatherData)}
          </tr>
        </tbody>
      </Table>
      </div>
    );
  }
});

export default Weather;
