import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './areaList.css';

import AreaData from '../../Data/AreaData';


function AreaList({ restaurantAreaFilterData }) {

    const [restaurantsArea, setRestaurantsArea] = useState(AreaData)
    const [restaurantAreaName, setRestaurantAreaName] = useState('')
    const [restaurantAreaId, setRestaurantAreaId] = useState('')
    const [restaurantSafetyNote, setRestaurantSafetyNote] = useState('')
    const [lat, setLat] = useState('')
    const [lon, setLon] = useState('')

    const restaurantAreaDetails = {
        restaurantAreaName,
        restaurantSafetyNote,
        restaurantAreaId,
        lat,
        lon,
    }

    return (
        <div>
            <h4 className="locations-main-title" >
                Locations
            </h4>

            <div className='locations-list-container'>

                {
                    restaurantAreaFilterData.map(restaurantArea => (
                        <div
                            className="locations-element"
                            key={restaurantArea.id}
                            onFocus={() => {
                                setRestaurantAreaId(restaurantArea.id)
                                setRestaurantAreaName(restaurantArea.name)
                                setRestaurantSafetyNote(restaurantArea.safety_note)
                                setLat(restaurantArea.lat)
                                setLon(restaurantArea.lon)
                            }}>
                            <Link to={{
                                pathname: "./Restaurants",
                                state: restaurantAreaDetails
                            }} style={{ color: '#ffffff', display: 'block' }}>
                                <img
                                    src={restaurantArea.imageUrl}
                                    className='location-image'
                                    alt='' />
                                <h4 className='location-name'>
                                    {restaurantArea.name}
                                </h4>
                            </Link>
                        </div>
                    ))
                }

            </div>
        </div>
    );
}

export default AreaList;