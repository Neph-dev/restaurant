import React from 'react';
import { Helmet } from 'react-helmet-async';

import HomeComponent from './Components/HomeComponent';

function HomePage() {
    return (
        <div>
            <Helmet>
                <title>Welcome to Restaurant</title>
                <meta
                    name="description"
                    content="Search for a restaurant based on 
                    the location and the type of food they offer."
                    data-rh="true"
                />
                <link rel='canonical' href='/' />
            </Helmet>

            <HomeComponent />
        </div>
    );
}

export default HomePage;