import React from 'react';
import "./Styles.css"

import StarsReviews from '../StarsReviews/StarsReviews';

import bigMouthImg from '../../Assets/BigMouth.jpg'


function RestaurantsList(props) {

    const name = undefined;
    const address = undefined;
    const image = undefined;
    const numOfRatings = undefined;
    const avgRatings = undefined;
    const contacts = undefined;

    return (
        <div className="restaurant-list-container">

            <img src={bigMouthImg} className="restaurant-image" alt="" />

            <div className='restaurant-details'>
                <h3 className='restaurant-name'>The Big Mouth</h3>

                <div style={{ display: 'inline-block', fontSize: 14 }}>
                    <div style={{ display: 'flex' }}>
                        <div className='bold-text'>Monday:</div> 12pm - 10pm
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div className='bold-text'>Tuesday:</div> 12pm - 10pm
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div className='bold-text'>Wednesday:</div> 12pm - 10pm
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div className='bold-text'>Thursday:</div> 12pm - 10pm
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div className='bold-text'>Friday:</div> 12pm - 10pm
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div className='bold-text'>Saturday:</div> 12pm - 10pm
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div className='bold-text'>Sunday:</div> 12pm - 10pm
                    </div>
                </div>

                <div className="address-container">
                    <div className='bold-text'>Address: </div>
                    <div>1st Respublic Road, Sandton, South Africa 2005</div>
                </div>

                <div className='flex-bold-text'>Status:
                    <div className='status'>Open</div>
                </div>
                <div className='flex-bold-text'>Contact(s):
                    <div>+27 67 791 9267</div>
                </div>

                <div style={{ display: 'flex' }}>
                    {/* Number of stars components */}
                    <StarsReviews avgRatings={avgRatings} numOfRatings={numOfRatings} />

                    <div className='buttons-container'>
                        <button className='btn-view-menu' >
                            View Menu
                        </button>
                        <button className='btn-gallery' >
                            Gallery
                        </button>
                        <button className='btn-book'>
                            Book
                        </button>
                    </div>
                </div>

            </div >
        </div >
    );
}

export default RestaurantsList;