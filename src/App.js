import React, {useReducer} from 'react';
import {Header, Search, Result, NotFound, Preloader} from "./components";
import {weather, initialState} from "./reducers/wheatherReducer";
import {setError, setForecast, setIsFetching, setIsLoaded, setWeather} from "./actions/weatherActions";
import axios from "axios";
import {date} from "./current-date";
import {getData} from "./api/api";
import {Transition} from "react-transition-group";

const App = () => {
    const [state, dispatch] = useReducer(weather, initialState);

    const onSearch = (searchValue) => {
        dispatch(setIsFetching(true))
        getData(searchValue)
            .then(axios.spread((weather, forecast, error) => {
                const weatherInfo = {
                    city: weather.data.name,
                    country: weather.data.sys.country,
                    description: weather.data.weather[0].description,
                    main: weather.data.weather[0].main,
                    temp: weather.data.main.temp,
                    highestTemp: weather.data.main.temp_max,
                    lowestTemp: weather.data.main.temp_min,
                    clouds: weather.data.clouds.all,
                    humidity: weather.data.main.humidity,
                    wind: weather.data.wind.speed,
                    date
                };

                dispatch(setWeather(weatherInfo));
                dispatch(setForecast(forecast.data.list));
                dispatch(setError(false));
                dispatch(setIsLoaded(true));
                dispatch(setIsFetching(false));
            }))
            .catch(error => {
                console.log(error);
                dispatch(setError(true));
                dispatch(setIsLoaded(true));
                dispatch(setIsFetching(false));
            })
    }

    const {isLoaded, isFetching, error, weatherData, forecast} = state;

    return (
        <div className="container">
            <Header isLoaded={isLoaded}>wheather app</Header>
            <div className='content'>
                <Transition
                    in={isLoaded}
                    timeout={1000}
                >
                    {state => <h1 className={`body-title ${state}`}>wheather app</h1>}
                </Transition>
                <Search onSearch={onSearch} isLoaded={isLoaded}/>
                {
                    !error ?
                        <>
                            <Transition
                                in={isLoaded}
                                timeout={1000}
                            >
                                {state => (
                                    <div className={`result-wrap ${state}`}>
                                        {
                                            isFetching ? <Preloader/> : <Result weather={weatherData} forecast={forecast}/>
                                        }
                                    </div>
                                )}
                            </Transition>
                        </> : <NotFound isLoaded={isLoaded}/>
                }
            </div>
        </div>
    )
};

export default App;
