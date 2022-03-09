import React from 'react';

import './locationSearchBar.css'


function SearchBar(props) {
    return (
        <div className="location-search-container">
            <input
                type="location-search"
                placeholder="Type In a Restaurant Name or a Type Of Food"
                className='location-search'
                autoFocus />
            <div className="location-search-icon" />
        </div>
    );
}

export default SearchBar;