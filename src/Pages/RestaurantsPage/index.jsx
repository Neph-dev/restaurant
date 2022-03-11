import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

/* import components */
import RestaurantPageHeader from './Components/RestaurantPageHeader';
import RestaurantsList from '../../Components/RestaurantsList/RestaurantsList';
import SearchRestaurant from './Components/SearchRestaurant';
import InfoArea from './Components/InfoArea';

import RestaurantData from '../../Data/RestaurantData'


function RestaurantsPage() {

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
                const itemData = item.restaurantName
                    ? item.restaurantName.toUpperCase()
                    : ''.toUpperCase()
                const secondItemData = item.type_of_food
                    ? item.type_of_food.toUpperCase()
                    : ''.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
                    || secondItemData.indexOf(textData) > -1
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
            <RestaurantPageHeader restaurantAreaName={restaurantAreaName} />
            <InfoArea
                restaurantAreaName={restaurantAreaName}
                restaurantSafetyNote={restaurantSafetyNote}
                restaurantAreaLat={restaurantAreaLat}
                restaurantAreaLon={restaurantAreaLon}
            />
            <SearchRestaurant
                searchRestaurantByName={searchRestaurantByName}
                searchRestaurant={searchRestaurant} />
            <RestaurantsList
                restaurantAreaId={restaurantAreaId}
                restaurantFilterData={restaurantFilterData} />
        </>
    );
}

export default RestaurantsPage;