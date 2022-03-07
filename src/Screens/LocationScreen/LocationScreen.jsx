import React, { useState, useEffect } from 'react';

/* import components */
import LocationScreenHeader from '../../Components/LocationScreenHeader/LocationScreenHeader';
import RestaurantsList from '../../Components/RestaurantsList/RestaurantsList';

/* Let's import our GraphQl queries and extentions  */
import { API, graphqlOperation } from 'aws-amplify'
import { listRestaurants } from '../../graphql/queries';
import { IterationReason } from 'azure-devops-node-api/interfaces/GitInterfaces';

function LocationScreen(items) {
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const restaurantsResult = await API.graphql(
                    graphqlOperation(listRestaurants)
                )
                setRestaurants(restaurantsResult.data.listRestaurants.items)
                console.log(restaurantsResult.data.listRestaurants.items)
            } catch (error) {
                console.log(error)
            }
        }
        fetchRestaurants()
    }, [])

    return (
        <>
            <LocationScreenHeader />

            <RestaurantsList />
        </>
    );
}

export default LocationScreen;