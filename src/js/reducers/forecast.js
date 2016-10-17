import { groupForecastsByDay } from '../helpers/weather';
import {
    NEW_FORECAST
} from '../constants/actionNames';

const forecast = (state = {}, action) => {
    switch (action.type) {
    case NEW_FORECAST:
        const newState = Object.assign({}, state);
        const groupedForecasts = groupForecastsByDay(action.forecast);
        newState[action.location] = groupedForecasts;
        return newState;
    default:
        return state
    }
}

export default forecast;
