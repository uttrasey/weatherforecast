/**
 * Maybe think about storing multiple forecasts etc.
 */
const forecast = (state = {}, action) => {
  switch (action.type) {
    case 'NEW_FORECAST':
      const newState = Object.assign({}, state);
      newState[action.location] = action.forecast;
      return newState;
    default:
      return state
  }
}

export default forecast;
