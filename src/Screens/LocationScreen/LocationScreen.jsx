import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* import components */
import LocationScreenHeader from '../../Components/LocationScreenHeader/LocationScreenHeader';
import RestaurantsList from '../../Components/RestaurantsList/RestaurantsList';
import SearchBar from './Components/SearchBar';
import InfoArea from './Components/InfoArea';

import RestaurantData from '../../Data/RestaurantData'


function LocationScreen(items) {

    const [searchInput, setSearchInput] = useState('')
    const [restaurantData, setRestaurantData] = useState(RestaurantData)
    const [restaurantFilterData, setRestaurantFilterData] = useState(RestaurantData)
    const [searchRestaurantByName, setSearchRestaurantByName] = useState('')

    const location = useLocation()

    const restaurantAreaId = location.state.restaurantAreaId
    const restaurantAreaName = location.state.restaurantAreaName
    const restaurantSafetyNote = location.state.restaurantSafetyNote
    const restaurantAreaLat = location.state.lat
    const restaurantAreaLon = location.state.lon

    const searchRestaurant = (text) => {
        if (text) {
            const newData = restaurantData.filter((item) => {
                const itemData = item.restaurantName ? item.restaurantName.toUpperCase()
                    : ''.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            });
            setRestaurantFilterData(newData)
            setSearchRestaurantByName(text)
        } else {
            setRestaurantFilterData(restaurantData)
            setSearchRestaurantByName(text)
        }
    }

    return (
        <>
            <LocationScreenHeader restaurantAreaName={restaurantAreaName} />
            <InfoArea
                restaurantAreaName={restaurantAreaName}
                restaurantSafetyNote={restaurantSafetyNote}
                restaurantAreaLat={restaurantAreaLat}
                restaurantAreaLon={restaurantAreaLon}
            />
            <SearchBar
                searchRestaurantByName={searchRestaurantByName}
                searchRestaurant={searchRestaurant}
                searchInput={searchInput} setSearchInput={setSearchInput} />
            <RestaurantsList
                restaurantAreaId={restaurantAreaId}
                restaurantFilterData={restaurantFilterData} />
        </>
    );
}

export default LocationScreen;