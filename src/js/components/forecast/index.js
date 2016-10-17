import React from 'react';
import FiveDayOutlook from './fiveDayOutlook';
import ForecastHeader from '../general/forecastHeader';
import { connect } from 'react-redux';
import * as WeatherActions from '../../actions';
import { renderComponent, branch } from 'recompose';

const mapStateToProps = (state, ownProps) => {
    const location = ownProps.params.location;
    return { forecast: state.forecast[location] };
}

const identity = t => t;

const spinner = () => {
    return <div>Loading...</div>;
}

const spinnerWhileLoading = hasLoaded => {
    return branch(
        hasLoaded,
        identity,
        renderComponent(spinner)
    );
}

const enhance = spinnerWhileLoading(props => {
    return !!props.forecast;
});

const Forecast = enhance(({ forecast }) =>
    <FiveDayOutlook forecast={forecast} />
);

@connect(mapStateToProps, WeatherActions)
export default class WeatherForecast extends React.Component {

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
          return (
              <div>
                <ForecastHeader location={this.props.params.location} />
                <Forecast {...this.props} />
              </div>
          );
      }

}

WeatherForecast.propTypes = {
    getForecast: React.PropTypes.any,
    forecast: React.PropTypes.any,
    params: React.PropTypes.any
}
