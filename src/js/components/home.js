import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { StyleSheet, css } from 'aphrodite';
import duck from '../../assets/images/duck.png';
import Weather from './weather';

// aphrodite styling
const styles = StyleSheet.create({
    red: {
        backgroundColor: 'pink'
    },
    hover: {
        ':hover': {
            backgroundColor: 'blue'
        }
    },
    bbb: {
        backgroundColor: '#ff0000'
    }
});

const Home = () => {
  return (
    <div>
      <Jumbotron id="bbb">
        <h1>Weather Forecast</h1>
      </Jumbotron>
      <div className={css(styles.red, styles.hover)}>
        <p>Here is the 5 day forecast for London</p>
      </div>
      <Weather />
      <img src={duck} />
    </div>
  )
}

export default Home;
