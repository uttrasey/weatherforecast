jest.unmock('../forecast');

import forecast from '../forecast';

describe('reducers', () => {

  it('can reduce a forecast', () => {
    expect(forecast(null, {
      type: 'NEW_FORECAST',
      forecast: 'hot'
    })).toEqual('hot');
  });

  it('allows pass through', () => {
    expect(forecast({ original: 'state' }, {
      type: 'OTHER_ACTION'
    })).toEqual({ original: 'state' });
  });

});
