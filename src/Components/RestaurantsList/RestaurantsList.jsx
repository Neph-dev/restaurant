import React, { useState } from 'react';

import "./restaurantsList.css";

import bigMouthImg from '../../Assets/BigMouth.jpg'

import StarsReviews from '../StarsReviews/StarsReviews';
import RestaurantData from '../../Data/RestaurantData';


function RestaurantsList({ restaurantAreaId, restaurantFilterData }) {

    const [center, setCenter] = useState(false)

    const [restaurants, setRestaurants] = useState(RestaurantData)

    const numOfRatings = undefined;
    const avgRatings = undefined;

    return (
        <div className='restaurant-list-container'>
            {
                restaurantFilterData.map(restaurant => (

                    restaurant.areaDataId === restaurantAreaId ?
                        <div
                            key={restaurant.restaurantName}
                            onClick={() => setCenter(true)}
                            className="restaurant-list">

                            <div style={{ width: '100%' }} >
                                <div className="image_description-container">
                                    <img src={bigMouthImg} className="restaurant-image" alt="" />

                                    <div className="restaurant-description">
                                        <div>{restaurant.restaurantName}</div>
                                        "Ought these are balls place mrs their times add she.
                                        Taken no great widow spoke of it small. Genius use
                                        except son esteem merely her limits. Sons park by do
                                        make on. It do oh cottage offered cottage in written."
                                    </div>
                                </div>
                                <div className='restaurant-details-container'>
                                    <h3 className='restaurant-name'>{restaurant.restaurantName}</h3>
                                    <div className='flex-bold-text'>
                                        {restaurant.type_of_food}
                                    </div>
                                    <div className='flex-bold-text' style={{ color: '#D4AF37' }}>
                                        {restaurant.price_range === 3 ? 'RRR' :
                                            restaurant.price_range === 2 ? 'RR' :
                                                restaurant.price_range === 1 ? 'R' : ''}
                                    </div>
                                    <div className="address-container">
                                        <div className='bold-text'>Address: </div>
                                        <div>{restaurant.address}</div>
                                    </div>
                                    <div className='flex-bold-text' style={{ textDecoration: 'underline' }}>
                                        Today: 12pm - 10pm
                                    </div>
                                    <div className='flex-bold-text'>Status:
                                        <div className='status'>Open</div>
                                    </div>
                                    <div className='flex-bold-text'>Contact(s):
                                        <a
                                            style={{ textDecoration: 'none', color: '#000' }}
                                            href='tel:+27677919267'>{restaurant.contacts}</a>
                                    </div>

                                    {/* Number of stars components */}
                                    <StarsReviews avgRatings={avgRatings} numOfRatings={numOfRatings} />

                                    <div className='buttons-container'>
                                        <button className='button-element' >
                                            View Menu
                                        </button>
                                        <button className='button-element' >
                                            Gallery
                                        </button>
                                        <button className='button-element'>
                                            Book
                                        </button>
                                        <button className='button-element'>
                                            Map
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        : []))
            }
        </div>
    );
}

export default RestaurantsList;