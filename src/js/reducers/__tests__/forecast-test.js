jest.unmock('../forecast');

import forecast from '../forecast';

describe('reducers', () => {

  /**
   * Stub out fetch and check we get the required dispatch
   */
  it('can reduce a forecast', () => {
    expect(forecast(null, {
      type: 'NEW_FORECAST',
      forecast: 'hot'
    })).toEqual('hot');
  });

});
