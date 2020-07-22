import React from 'react';
import PropTypes from 'prop-types';

const ForecastHour = ({temp, icon, month, day, hour}) => {
    const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;

    return (
        <div className='forecast'>
            <div>{month}.{day}</div>
            <div>{hour}:00</div>
            <div>
                <img src={iconUrl} alt=""/>
            </div>
            <div>{temp}&#176;</div>
        </div>
    );
};

ForecastHour.propTypes = {
    temp: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired
};

export default ForecastHour;