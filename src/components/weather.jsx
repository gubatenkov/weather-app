import React from 'react'

const Weather = (props) => {
    return (
        <div className="wrap">
            { props.city &&
                <ul className="weather">
                    <li className="weather__item">In {props.city}, {props.country} the temperature is now {props.temp} C</li>
                    <li className="weather__item">Wind: {props.wind} m/s</li>
                    <li className="weather__item">Sunrise: {props.sunrise}</li>
                    <li className="weather__item">Sunset: {props.sunset}</li>
                </ul>
            }
        </div>
    )
}

export default Weather