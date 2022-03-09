import React from 'react';

import "./LocationScreenHeader.css"


function LocationScreenHeader() {
    return (
        <>
            <div style={{ position: 'relative', height: 200 }}>
                <div className="header-background-image" />
                <h4>
                    <a href="/" className='go-to-home'>
                        Home
                    </a>
                </h4>
                <h1 className='welcome-text'>
                    Welcome to Sandton City
                </h1>
            </div>

            <div className='area-title-container'>
                <h3 className='area-title'>
                    <div>Restaurants in Sandton</div>
                </h3>
            </div>
        </>
    );
}

export default LocationScreenHeader;