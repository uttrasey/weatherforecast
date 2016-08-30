import { combineReducers } from 'redux';
import forecast from './forecast';

const weatherApp = combineReducers({
  forecast
})

export default weatherApp;
