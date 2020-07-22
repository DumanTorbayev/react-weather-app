import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCloud,
    faBolt,
    faCloudRain,
    faCloudShowersHeavy,
    faSnowflake,
    faSun,
    faSmog,
} from '@fortawesome/free-solid-svg-icons';

const Weather = ({weather}) => {
    const {city, country, date, main, temp, description, highestTemp, lowestTemp, wind, humidity} = weather;

    let weatherIcon = null;

    if (main === 'Thunderstorm') {
        weatherIcon = <FontAwesomeIcon icon={faBolt} />;
    } else if (main === 'Drizzle') {
        weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
    } else if (main === 'Rain') {
        weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
    } else if (main === 'Snow') {
        weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
    } else if (main === 'Clear') {
        weatherIcon = <FontAwesomeIcon icon={faSun} />;
    } else if (main === 'Clouds') {
        weatherIcon = <FontAwesomeIcon icon={faCloud} />;
    } else {
        weatherIcon = <FontAwesomeIcon icon={faSmog} />;
    }

    return (
        <div className='current-weather-wrap'>
            <div className='current-weather'>
                <div className='location'>{city}, {country}</div>
                <div className='current-day'>{date}</div>
            </div>

            <div className='weather-container'>
                <div className='current-weather-info'>
                    <div className='weather-icon'>{weatherIcon}</div>
                    <div>
                        <div className='temp'>{Math.floor(temp)}&#176;</div>
                        <div className='description'>{description}</div>
                    </div>
                </div>
                <div className='weather-details'>
                    <div className='weather-details--items'>
                        <span>{Math.floor(highestTemp)}&#176;</span>
                        <span>High</span>
                    </div>
                    <div className='weather-details--items'>
                        <span>{Math.floor(lowestTemp)}&#176;</span>
                        <span>Low</span>
                    </div>
                    <div className='weather-details--items'>
                        <span>{wind} km/h</span>
                        <span>Wind</span>
                    </div>
                    <div className='weather-details--items'>
                        <span>{humidity} %</span>
                        <span>Humidity</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

Weather.propTypes = {
    weather: PropTypes.shape({
        city: PropTypes.string,
        country: PropTypes.string,
        date: PropTypes.string,
        main: PropTypes.string,
        temp: PropTypes.number,
        description: PropTypes.string,
        highestTemp: PropTypes.number,
        lowestTemp: PropTypes.number,
        wind: PropTypes.number,
        humidity: PropTypes.number,
    }).isRequired

};

export default Weather;