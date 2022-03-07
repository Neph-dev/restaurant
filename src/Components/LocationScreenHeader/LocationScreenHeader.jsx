import React from 'react';

import "./LocationScreenHeader.css"


function LocationScreenHeader() {
    return (
        <div>
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
                    Restaurants in Sandton
                </h3>
            </div>
        </div>
    );
}

export default LocationScreenHeader;