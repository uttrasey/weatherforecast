import { combineReducers } from 'redux';
import forecasts from './forecasts';

const weatherApp = combineReducers({
  forecasts
})

export default weatherApp;
