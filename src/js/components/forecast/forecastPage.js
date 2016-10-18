import React, { PropTypes } from 'react';
import FiveDayOutlook from './fiveDayOutlook';
import ForecastHeader from '../general/forecastHeader';

const ForecastPage = (props) => (
    <div>
        <ForecastHeader location={props.params.location} />
        <FiveDayOutlook {...props} />
    </div>
);

ForecastPage.propTypes = {
    params: PropTypes.any
}

export default ForecastPage;
