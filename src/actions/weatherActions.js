export const setWeather = (data) => ({type: 'SET_WEATHER', payload: data});
export const setForecast = (data) => ({type: 'SET_FORECAST', payload: data});
export const setIsFetching = (value) => ({type: 'SET_IS_FETCHING', payload: value});
export const setError = (value) => ({type: 'SET_ERROR', payload: value});