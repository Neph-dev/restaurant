import React, { useState } from 'react';

import './home.css';

import Clock from '../Clock/Clock';
import Search from '../Search/Search';
import Trending from '../Trending/Trending';

import AreaData from '../../Data/AreaData';


function Home() {

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
            <div style={{ position: 'absolute', margin: 10, right: 0, color: "#fff", zIndex: 2 }}>
                <Clock />
            </div>

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
                    <Search
                        searchRestaurantAreaByName={searchRestaurantAreaByName}
                        searchRestaurantArea={searchRestaurantArea} />
                </div>

                <div>
                    <Trending restaurantAreaFilterData={restaurantAreaFilterData} />
                </div>
            </div>
        </div>
    );
}

export default Home;