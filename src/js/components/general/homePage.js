import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router'
import { mapProps } from 'recompose';
import { compose } from 'ramda';
import { withState } from 'recompose';
import { StyleSheet, css } from 'aphrodite';
import weather from '../../../assets/images/weather.png';

const styles = StyleSheet.create({
    pic: {
        height: 100,
        width: 100
    }
});

/**
 * Add a state prop called counter then map over the update func to provide
 * convenience methods.
 */
const enhance = compose(
    withState('counter', 'setCounter', 0),
    mapProps(({ setCounter, ...rest }) => ({
        increment: () => setCounter(n => n + 1),
        decrement: () => setCounter(n => n - 1),
        reset: () => setCounter(0),
        ...rest
    }))
);

const HomePage = enhance(({counter, increment, decrement, reset}) => {
    return (
        <div>
            <Jumbotron>
            <h1>Weather Forecast</h1>
            </Jumbotron>
            <p><img className={css(styles.pic)} src={weather} /> Lets take a look at the weather in London by clicking <Link to={'/London'}>here</Link></p>
            <p>Counter value: {counter}</p>
            <p><a onClick={increment}>Increment</a></p>
            <p><a onClick={decrement}>Decrement</a></p>
            <p><a onClick={reset}>Reset</a></p>
        </div>
    );
});

export default HomePage;
