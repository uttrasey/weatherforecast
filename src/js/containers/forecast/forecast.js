import React from 'react';
import { connect } from 'react-redux';

import * as WeatherActions from '../../actions';
import FiveDayOutlook from '../../components/forecast/fiveDayOutlook';
import ForecastHeader from '../../components/general/forecastHeader';
import spinnerWhileLoading from '../../components/hoc/spinnerWhileLoading';

const mapStateToProps = (state, ownProps) => {
    const location = ownProps.params.location;
    return { forecast: state.forecast[location] };
}

const enhance = spinnerWhileLoading(props => {
    return !!props.forecast;
});

const Forecast = enhance(({ forecast }) =>
    <FiveDayOutlook forecast={forecast} />
);

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
          return (
              <div>
                <ForecastHeader location={this.props.params.location} />
                <Forecast {...this.props} />
              </div>
          );
      }

}

ForecastContainer.propTypes = {
    getForecast: React.PropTypes.any,
    forecast: React.PropTypes.any,
    params: React.PropTypes.any
}
