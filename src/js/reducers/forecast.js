/**
 * Maybe think about storing multiple forecasts etc.
 */
const forecast = (state = {}, action) => {
  switch (action.type) {
    case 'NEW_FORECAST':
      const result = Object.assign({}, state);
      result[action.location] = action.forecast;
      return result;
    default:
      return state
  }
}

export default forecast;
