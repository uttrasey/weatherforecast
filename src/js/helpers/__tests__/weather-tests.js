jest.unmock('moment');
jest.unmock('../weather');
jest.unmock('./data/forecast.json');

import forecast from './data/forecast.json';
import { groupForecastsByDay } from '../weather';

describe('weather helper', () => {

  it('can group data by day', () => {
    expect(groupForecastsByDay(forecast)).toEqual([
      {
        name: 'Thu, Sep 1st',
        forecasts: {
          '00:00:00': {
            dt: 1472688000,
            main: {
              temp: 26.62
            },
            dt_txt: '2016-09-01 00:00:00'
          },
          '03:00:00': {
            dt: 1472698800,
            main: {
              temp: 21.31
            },
            dt_txt: '2016-09-01 03:00:00'
          }
        }
      },
      {
        name: 'Fri, Sep 2nd',
        forecasts: {
          '03:00:00': {
            dt: 1472785200,
            main: {
              temp: 18.77
            },
            dt_txt: '2016-09-02 03:00:00'
          },
          '06:00:00': {
            dt: 1472796000,
            main: {
              temp: 12
            },
            dt_txt: '2016-09-02 06:00:00'
          }
        }
      }
    ]);
  });

});
