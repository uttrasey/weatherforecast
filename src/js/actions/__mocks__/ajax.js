// mock forecast API implementation
export const fetchForecast = (location) => {
    return Promise.resolve({
        some: 'forecast'
    });
}
