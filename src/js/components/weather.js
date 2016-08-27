import React from 'react';
import payload from 'json!./__tests__/data/forecast.json';
import Forecast from './forecast';

var weather = React.createClass({

  render() {
    return <div>
      <Forecast data={payload} />
    </div>;
  }
});

export default weather;
