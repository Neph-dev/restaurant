import React from 'react';

import './searchArea.css';


function SearchArea({ searchRestaurantAreaByName, searchRestaurantArea }) {
    return (
        <div className="search-container">
            <input
                type="search"
                placeholder="Type In a Location ..." //or a Type Of Food
                className='search'
                value={searchRestaurantAreaByName}
                onChange={(e) => {
                    searchRestaurantArea(e.target.value)
                }}
                autoFocus />
            <div className="search-icon" />
        </div>
    );
}

export default SearchArea;