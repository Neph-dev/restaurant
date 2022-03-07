import React from 'react';

import './search.css'


function Search() {
    return (
        <div className="search-container">
            <input
                type="search"
                placeholder="Type In a Location or a Type Of Food"
                className='search'
                autoFocus />
            <div className="search-icon" />
        </div>
    );
}

export default Search;