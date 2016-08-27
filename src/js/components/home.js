import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { StyleSheet, css } from 'aphrodite';
import duck from '../../assets/images/duck.png';

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
        <h1>ACME business</h1>
        <p>ACME business stuff.</p>
      </Jumbotron>
      <div className={css(styles.red, styles.hover)}>
        <p>Welcome to the website of ACME business</p>
      </div>
      <img src={duck} />
    </div>
  )
}

export default Home;
