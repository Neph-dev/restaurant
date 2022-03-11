import React from 'react';

import './searchRestaurant.css'


function SearchRestaurant({ searchRestaurant, searchRestaurantByName }) {
    return (
        <div className="location-search-container">
            <input
                type="search"
                placeholder="Type In a Restaurant Name or a Type Of Food"
                className='location-search'
                value={searchRestaurantByName}
                onChange={(e) => {
                    searchRestaurant(e.target.value)
                }}
                autoFocus />
            <div className="location-search-icon" />
        </div>
    );
}

export default SearchRestaurant;