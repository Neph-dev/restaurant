import React, { useState, useEffect } from 'react';

import './infoArea.css';


function InfoArea(props) {

    let fullDate = new Date()
    const time = fullDate.toLocaleTimeString({ hour: 'numeric', hour12: false, minute: 'numeric' });
    let currentHours = fullDate.getHours();
    let currentMinutes = fullDate.getMinutes();
    let currentSeconds = fullDate.getSeconds();

    const [hours, setHours] = useState(currentHours)
    const [minutes, setMinutes] = useState(currentMinutes)
    const [seconds, setSeconds] = useState(currentSeconds)

    const displayTime = () => {
        return `${currentHours} : ${currentMinutes}`
    }
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
                <div>Safety Note</div> <div className='note'>8/10: Good</div>
            </div>
            <div className="info-time-container">
                {time}
            </div>
            <div className="info-weather">
                <div className="info-weather-icon" />
                <div>24°</div>
                <div className='info-weather-type'>Sunny in Sandton</div>
            </div>
        </div>
    );
}

export default InfoArea;