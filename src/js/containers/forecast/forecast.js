import React from 'react';
import { connect } from 'react-redux';

import * as WeatherActions from '../../actions';
import ForecastPage from '../../components/forecast/forecastPage';

const mapStateToProps = (state, ownProps) => {
    const location = ownProps.params.location;
    return { forecast: state.forecast[location] };
}

@connect(mapStateToProps, WeatherActions)
export default class ForecastContainer extends React.Component {

      componentDidMount() {
          this.getForecastIfNeeded(this.props);
      }

      componentWillReceiveProps(nextProps) {
          this.getForecastIfNeeded(nextProps);
      }

      getForecastIfNeeded(props) {
          const { location } = props.params;
          if (!props.forecast) {
              props.getForecast(location);
          }
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
