// mock forecast API implementation
export const fetchForecast = (location) => {
  return new Promise((resolve, reject) => {
    resolve({
      some: 'forecast'
    });
  });
}
