import React from 'react';
import { Link } from 'react-router-dom'

import "./restaurantPageHeader.css"


function RestaurantPageHeader({ restaurantAreaName }) {
    return (
        <>
            <div style={{ position: 'relative', height: 200 }}>
                <div className="header-background-image" />
                <h4>
                    <Link to='/' className='go-to-home'>
                        Home
                    </Link>
                </h4>
                <h1 className='welcome-text'>
                    Welcome to {restaurantAreaName}
                </h1>
            </div>

            <div className='area-title-container'>
                <h3 className='area-title'>
                    <div>Restaurants in {restaurantAreaName}</div>
                </h3>
            </div>
        </>
    );
}

export default RestaurantPageHeader;