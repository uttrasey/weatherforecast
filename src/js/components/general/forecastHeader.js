import React, { PropTypes } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router'

const Header = ({ location }) => {
    return (
        <Jumbotron>
          <h1>Weather Forecast</h1>
          <h3>{location}... other locations:</h3>
          <ul>
            <li><Link to={'/London'}>London</Link></li>
            <li><Link to={'/Paris'}>Paris</Link></li>
            <li><Link to={'/Dublin'}>Dublin</Link></li>
          </ul>
        </Jumbotron>
    );
}

Header.propTypes = {
    location: PropTypes.string
}

export default Header;
