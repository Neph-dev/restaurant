import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* import components */
import LocationScreenHeader from '../../Components/LocationScreenHeader/LocationScreenHeader';
import RestaurantsList from '../../Components/RestaurantsList/RestaurantsList';

import SearchBar from './Components/SearchBar';
import InfoArea from './Components/InfoArea';

function LocationScreen(items) {

    const location = useLocation()
    console.log(location)
    const restaurantAreaId = location.state.restaurantAreaId
    const restaurantAreaName = location.state.restaurantAreaName
    const restaurantSafetyNote = location.state.restaurantSafetyNote
    const restaurantAreaLat = location.state.lat
    const restaurantAreaLon = location.state.lon
    const restaurantName = location.state.restaurantName

    return (
        <>
            <LocationScreenHeader restaurantAreaName={restaurantAreaName} />
            <InfoArea
                restaurantAreaName={restaurantAreaName}
                restaurantSafetyNote={restaurantSafetyNote}
                restaurantAreaLat={restaurantAreaLat}
                restaurantAreaLon={restaurantAreaLon}
            />
            <SearchBar />
            <RestaurantsList restaurantName={restaurantName} />
        </>
    );
}

export default LocationScreen;