jest.unmock('../index');

import { getForecast } from '../index';

describe('actions', () => {

  /**
   * Stub out fetch and check we get the required dispatch
   */
  it('can get a forecast', () => {
    var dispatch = jest.fn();

    return getForecast('London')(dispatch).then(result => {
      const dispatchedForecast = dispatch.mock.calls[0];
      expect(dispatchedForecast[0]).toEqual({
        type: 'NEW_FORECAST',
        forecast: {
          some: 'forecast'
        }
      });
    });
  });

});
