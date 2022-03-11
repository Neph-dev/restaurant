import React, { useState, useEffect } from 'react';

import axios from 'axios';

import './infoArea.css';


function InfoArea({
    restaurantAreaName,
    restaurantAreaLat,
    restaurantAreaLon,
    restaurantSafetyNote }) {

    const openWeatherMapAPI = 'da8f6401dfc0fbdac5443ba21d75f11e'
    const units = 'metric'
    const countryCode = 'ZA'
    const location = restaurantAreaName
    const weatherBaseUrl = `https://api.openweathermap.org/data/2.5/weather?`

    let fullDate = new Date()
    const time = fullDate.toLocaleTimeString({ hour: 'numeric', hour12: false, minute: 'numeric' });
    let currentHours = fullDate.getHours();
    let currentMinutes = fullDate.getMinutes();
    let currentSeconds = fullDate.getSeconds();

    const [hours, setHours] = useState(currentHours)
    const [minutes, setMinutes] = useState(currentMinutes)
    const [seconds, setSeconds] = useState(currentSeconds)

    //weather information
    const [areaName, setAreaName] = useState('');
    const [areaDegree, setAreaDegree] = useState('');
    const [weatherDescription, setWeatherDescription] = useState('');


    useEffect(() => {
        axios.get(`${weatherBaseUrl}lat=${restaurantAreaLat}&lon=${restaurantAreaLon}&units=${units}&appid=${openWeatherMapAPI}`)
            .then(response => {
                setAreaName(response.data.name)
                setAreaDegree(Math.floor(response.data.main.temp))
                setWeatherDescription(response.data.weather[0].main)
            })
    }, [])
    useEffect((event) => {
        const timer = setTimeout(() => {
            setSeconds((seconds) => seconds + 1);
            setMinutes((minutes) => minutes + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    })

    return (
        <div id='infoArea'>
            <div className='safety-note'>
                <div>Safety Note</div> <div className={
                    restaurantSafetyNote >= 7 ? 'green_note' :
                        restaurantSafetyNote >= 5 ? 'orange_note' :
                            restaurantSafetyNote < 5 ? 'red_note' : ''}>
                    {restaurantSafetyNote}/10: {
                        restaurantSafetyNote >= 9 ? "Excellent" :
                            restaurantSafetyNote >= 7 ? "Good" :
                                restaurantSafetyNote >= 5 ? "Average" :
                                    restaurantSafetyNote < 5 ? 'Bad' : ''}
                </div>
            </div>
            <div className="info-time-container">
                {time}
            </div>
            <div className="info-weather">
                <div className="info-weather-icon" />
                <div>{areaDegree}°c</div>
                <div className='info-weather-type'>{weatherDescription} in {location}</div>
            </div>
        </div>
    );
}

export default InfoArea;