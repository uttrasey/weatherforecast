jest.unmock('../forecast');

import forecast from '../forecast';

describe('reducers', () => {

    it('can reduce a forecast init state', () => {
        expect(forecast(null, {
            type: 'NEW_FORECAST',
            location: 'paris',
            forecast: 'hot'
        })).toEqual({
            paris: 'hot'
        });
    });

    it('can reduce a forecast existing state', () => {
        const initialState = {
            london: 'cold'
        }

        expect(forecast(initialState, {
            type: 'NEW_FORECAST',
            location: 'paris',
            forecast: 'hot'
        })).toEqual({
            paris: 'hot',
            london: 'cold'
        });
    });

    it('allows pass through', () => {
        expect(forecast({ original: 'state' }, {
            type: 'OTHER_ACTION'
        })).toEqual({ original: 'state' });
    });

});
