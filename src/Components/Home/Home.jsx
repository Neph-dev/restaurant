import React from 'react';

import './home.css';

import Clock from '../Clock/Clock';
import Search from '../Search/Search';
import Trending from '../Trending/Trending';


function Home() {
    return (
        <div className='home-container'>
            {/* <div style={{ position: 'absolute', margin: 10, right: 0, color: "#000000", zIndex: 2 }}>
                <Clock />
            </div> */}

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
                    <Search />
                </div>

                <div>
                    <Trending />
                </div>
            </div>
        </div>
    );
}

export default Home;