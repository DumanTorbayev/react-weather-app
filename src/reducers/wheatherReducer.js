export const initialState = {
    weatherData: {},
    forecast: [],
    isLoaded: false,
    isFetching: false,
    error: false
}

export const weather = (state, action) => {
    switch (action.type) {
        case 'SET_WEATHER':
            return {
                ...state,
                weatherData: action.payload,
                isLoaded: true,
            }
        case 'SET_FORECAST':
            return {
                ...state,
                forecast: action.payload,
                isLoaded: true,
            }
        case 'SET_IS_FETCHING':
            return {
                ...state,
                isFetching: action.payload,
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload,
                isLoaded: true,
            }
        default:
            return state
    }
}