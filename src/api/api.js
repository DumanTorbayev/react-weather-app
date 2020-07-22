import axios from "axios";

const APIkey = '19e8266c255d5d99c5c0bd92f36997a3'

export const getData = (searchValue) => {
    const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&APPID=${APIkey}&units=metric`;
    const forecastApi = `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&APPID=${APIkey}&units=metric`;

    return axios.all([
        axios.get(weatherApi),
        axios.get(forecastApi)
    ]);
}