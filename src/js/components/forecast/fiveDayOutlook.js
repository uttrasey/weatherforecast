import React from 'react';
import Forecast from './forecast';
import { Table } from 'react-bootstrap';
import { StyleSheet, css } from 'aphrodite';

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
   * Generate the forecast cells for a given time.
   */
    getForecastsFor(time) {
        const values = this.props.forecast.map(day => {
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
        values.unshift(<td key={time}>{time}</td>);
        return values;
    },

    render() {
        const dayHeadings = this.props.forecast.map(day => {
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
                  <tr>{this.getForecastsFor('00:00:00')}</tr>
                  <tr>{this.getForecastsFor('03:00:00')}</tr>
                  <tr>{this.getForecastsFor('06:00:00')}</tr>
                  <tr>{this.getForecastsFor('09:00:00')}</tr>
                  <tr>{this.getForecastsFor('12:00:00')}</tr>
                  <tr>{this.getForecastsFor('15:00:00')}</tr>
                  <tr>{this.getForecastsFor('18:00:00')}</tr>
                  <tr>{this.getForecastsFor('21:00:00')}</tr>
                </tbody>
              </Table>
              </div>
      );
    }
});

export default Weather;
