import { fetchForecast } from './ajax';
import {
    NEW_FORECAST
} from '../constants/actionNames';
/**
 * Helper to get the action payload
 */
const deliverForecast = (location, forecast) => ({
    type: NEW_FORECAST,
    location,
    forecast
});

/**s
 * Get forecast action
 */
export const getForecast = (location) => (
    (dispatch) => {
        return fetchForecast(location).then(forecast => dispatch(deliverForecast(location, forecast)));
    }
);
