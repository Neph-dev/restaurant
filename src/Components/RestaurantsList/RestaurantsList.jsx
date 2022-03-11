import React from 'react';
import "./restaurantsList.css";

import StarsReviews from '../StarsReviews/StarsReviews';

import bigMouthImg from '../../Assets/BigMouth.jpg'


function RestaurantsList({ restaurantName }) {

    const name = undefined;
    const address = undefined;
    const image = undefined;
    const numOfRatings = undefined;
    const avgRatings = undefined;
    const contacts = undefined;

    return (
        <div className="restaurant-list-container">
            <div style={{ width: '100%' }}>
                <div className="image_description-container">
                    <img src={bigMouthImg} className="restaurant-image" alt="" />

                    <div className="restaurant-description">
                        <div>The Big Mouth</div>
                        "Ought these are balls place mrs their times add she.
                        Taken no great widow spoke of it small. Genius use
                        except son esteem merely her limits. Sons park by do
                        make on. It do oh cottage offered cottage in written."
                    </div>
                </div>
                <div className='restaurant-details-container'>
                    <h3 className='restaurant-name'>{restaurantName}</h3>
                    <div className='flex-bold-text'>
                        Chinese
                    </div>
                    <div className='flex-bold-text' style={{ color: '#D4AF37' }}>
                        RRR
                    </div>
                    <div className="address-container">
                        <div className='bold-text'>Address: </div>
                        <div>1st Respublic Road, Sandton, South Africa 2005</div>
                    </div>
                    <div className='flex-bold-text' style={{ textDecoration: 'underline' }}>
                        Today: 12pm - 10pm
                    </div>
                    <div className='flex-bold-text'>Status:
                        <div className='status'>Open</div>
                    </div>
                    <div className='flex-bold-text'>Contact(s):
                        <div>+27 67 791 9267</div>
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
    );
}

export default RestaurantsList;