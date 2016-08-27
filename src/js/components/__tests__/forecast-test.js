jest.unmock('../forecast');
jest.unmock('./data/forecast.json');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Forecast from '../forecast';
import data from './data/forecast.json';

describe('forecast', () => {
  it('renders a forecast', () => {
    const aForecast = TestUtils.renderIntoDocument(
      <Forecast data={data} />
    );

    const node = ReactDOM.findDOMNode(aForecast);
    expect(node).toEqual('Off');
  });
});
