import React, { PropTypes } from 'react';
import FiveDayOutlook from './fiveDayOutlook';
import ForecastHeader from '../general/forecastHeader';
import spinnerWhileLoading from '../hoc/spinnerWhileLoading';

const enhance = spinnerWhileLoading(props => {
    return !!props.forecast;
});

const EnhancedFiveDayOutlook = enhance(({ forecast }) =>
    <FiveDayOutlook forecast={forecast} />
);

const ForecastPage = (props) => (
    <div>
        <ForecastHeader location={props.params.location} />
        <EnhancedFiveDayOutlook {...props} />
    </div>
);

ForecastPage.propTypes = {
    params: PropTypes.any
}

export default ForecastPage;
