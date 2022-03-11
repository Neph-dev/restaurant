import React from 'react';

import './locationSearchBar.css'


function SearchBar({ searchRestaurant, searchRestaurantByName }) {
    return (
        <div className="location-search-container">
            <input
                type="location-search"
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

export default SearchBar;