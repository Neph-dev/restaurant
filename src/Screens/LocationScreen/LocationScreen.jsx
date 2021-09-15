import React, {useEffect} from 'react';

/* import components */
import LocationScreenHeader from '../../Components/LocationScreenHeader/LocationScreenHeader';
import RestaurantsList from '../../Components/RestaurantsList/RestaurantsList';

function LocationScreen() {
    return (
        <div>
            <LocationScreenHeader />
            <div style={{backgroundColor:'#08172E', marginTop:90,}}>

                <h3 style={{position:'relative', textAlign:'center', color:'#ffffff', padding:20}}>
                    Restaurants in Sandton
                </h3>
            <RestaurantsList/>
            </div>
        </div>
    );
}

export default LocationScreen;