import axios from "axios";

const APIkey = process.env.REACT_APP_API_KEY

export const getData = (searchValue) => {
    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&APPID=${APIkey}&units=metric`;
    const forecastApi = `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&APPID=${APIkey}&units=metric`;

    return axios.all([
        axios.get(weatherApi),
        axios.get(forecastApi)
    ]);
}