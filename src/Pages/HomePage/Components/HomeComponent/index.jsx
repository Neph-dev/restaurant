import React, { useState } from 'react';

import AreaData from '../../../../Data/AreaData';

import './homeComponent.css';

import Clock from '../../../../Components/Clock';
import SearchArea from '../SearchArea';
import AreaList from '../../../../Components/AreaList';


function HomeComponent() {

    const [restaurantAreaData, setRestaurantAreaData] = useState(AreaData)
    const [restaurantAreaFilterData, setRestaurantAreaFilterData] = useState(AreaData)
    const [searchRestaurantAreaByName, setSearchRestaurantAreaByName] = useState('')

    const searchRestaurantArea = (text) => {
        if (text) {
            const newData = restaurantAreaData.filter((item) => {
                const itemData = item.name
                    ? item.name.toUpperCase()
                    : ''.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            });
            setRestaurantAreaFilterData(newData)
            setSearchRestaurantAreaByName(text)
        } else {
            setRestaurantAreaFilterData(restaurantAreaData)
            setSearchRestaurantAreaByName(text)
        }
    }

    return (
        <div className='home-container'>

            <Clock />

            <div className='home-background' />

            <div className='home-content'>

                <h1 className='home-main-title'>
                    Welcome To Restaurants
                </h1>

                <h4 className='home-second-title' >
                    Find a restaurant based on the location
                    or the type of food you'd like
                </h4>

                <div style={{ margin: 50, }}>
                    <SearchArea
                        searchRestaurantAreaByName={searchRestaurantAreaByName}
                        searchRestaurantArea={searchRestaurantArea} />
                </div>

                <div>
                    <AreaList restaurantAreaFilterData={restaurantAreaFilterData} />
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;