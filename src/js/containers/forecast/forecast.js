import React from 'react';
import { connect } from 'react-redux';

import * as WeatherActions from '../../actions';
import ForecastPage from '../../components/forecast/forecastPage';

const getForecastIfNeeded = (props) => {
    if (!props.forecast) {
        props.getForecast(props.params.location);
    }
}

const mapStateToProps = (state, ownProps) => {
    const location = ownProps.params.location;
    return { forecast: state.forecast[location] };
}

@connect(mapStateToProps, WeatherActions)
export default class ForecastContainer extends React.Component {

      componentDidMount() {
          getForecastIfNeeded(this.props);
      }

      componentWillReceiveProps(nextProps) {
          getForecastIfNeeded(nextProps);
      }

      render() {
          return <ForecastPage {...this.props} />;
      }

}

ForecastContainer.propTypes = {
    getForecast: React.PropTypes.any,
    forecast: React.PropTypes.any,
    params: React.PropTypes.any
}
