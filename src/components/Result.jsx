import React from 'react';
import {Weather, ForecastHour} from "./index";

const Result = ({weather, forecast}) => {

    return (
        <>
            <Weather weather={weather}/>
            <div className='forecast-container'>
                <h2 className='forecast-title'>Forecast</h2>
                <div className='forecast-wrap'>
                    {
                        forecast.map(item => (
                            <ForecastHour
                                key={item.dt}
                                temp={Math.floor(item.main.temp)}
                                icon={item.weather[0].icon}
                                month={item.dt_txt.slice(5, 7)}
                                day={item.dt_txt.slice(8, 10)}
                                hour={item.dt_txt.slice(11, 13)}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Result;