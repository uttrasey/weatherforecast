import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router'

import { StyleSheet, css } from 'aphrodite';
import weather from '../../../assets/images/weather.png';

const styles = StyleSheet.create({
    pic: {
        height: 100,
        width: 100
    }
});

/**
 * Screen showing the user how to get a forecast.
 */
export default class Home extends React.Component {

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Weather Forecast</h1>
        </Jumbotron>
        <p><img className={css(styles.pic)} src={weather} /> Lets take a look at the weather in London by clicking <Link to={'/London'}>here</Link></p>
      </div>
    )
  }

}
