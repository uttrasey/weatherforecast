import React from 'react';
import Forecast from './forecast';
import { Table } from 'react-bootstrap';
import { StyleSheet, css } from 'aphrodite';
import { spinnerWhileLoading } from '../hoc';
import { prop } from 'ramda';

const styles = StyleSheet.create({
    table: {
        margin: 50
    }
});

const getForecastsFor = (time, forecast) => {
    const values = forecast.map(day => (
        <td key={day.name}>
            <Forecast data={day.forecasts[time]} />
        </td>
    ));
    values.unshift(<td key={time}>{time}</td>);
    return values;
}

const getDayHeadings = forecast => {
    return forecast.map(day => <th key={day.name}>{day.name}</th>);
}

const hasLoaded = prop('forecast');

const enhance = spinnerWhileLoading(hasLoaded);

const FiveDayOutlook = enhance(({forecast}) => (
    <div>
        <Table responsive={true} className={css(styles.table)}>
            <thead>
                <tr>
                    <th>Time</th>
                    {getDayHeadings(forecast)}
                </tr>
            </thead>
            <tbody>
                <tr>{getForecastsFor('00:00:00', forecast)}</tr>
                <tr>{getForecastsFor('03:00:00', forecast)}</tr>
                <tr>{getForecastsFor('06:00:00', forecast)}</tr>
                <tr>{getForecastsFor('09:00:00', forecast)}</tr>
                <tr>{getForecastsFor('12:00:00', forecast)}</tr>
                <tr>{getForecastsFor('15:00:00', forecast)}</tr>
                <tr>{getForecastsFor('18:00:00', forecast)}</tr>
                <tr>{getForecastsFor('21:00:00', forecast)}</tr>
            </tbody>
        </Table>
    </div>
));

FiveDayOutlook.propTypes = {
    forecast: React.PropTypes.any
}

export default FiveDayOutlook;
