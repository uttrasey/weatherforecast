const forecast = (state = null, action) => {
  switch (action.type) {
    case 'NEW_FORECAST':
      return action.forecast
    default:
      return state
  }
}

export default forecast;
