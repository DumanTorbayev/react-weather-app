import React from 'react';
import {Weather, ForecastHour} from "./index";
import Scrollbars from "react-custom-scrollbars-2";

const Result = ({weather, forecast}) => {
    const {innerWidth} = window

    return (
        <>
            <Weather weather={weather}/>
            <div className='forecast-container'>
                <h2 className='forecast-title'>Forecast</h2>
                <Scrollbars
                    style={{
                        maxWidth: '100%',
                        height: `${innerWidth < 768 ? '145px' : '185px'}`,
                        marginTop: '1rem',
                        marginBottom: '1rem'
                    }}
                    renderThumbHorizontal={({ style, ...props }) =>
                        <div {...props} style={{ ...style, backgroundColor: '#fff', borderRadius: '3px' }}/>
                    }
                >
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
                </Scrollbars>

                {/*<div className='forecast-wrap'>
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
                </div>*/}
            </div>
        </>
    );
};

export default Result;