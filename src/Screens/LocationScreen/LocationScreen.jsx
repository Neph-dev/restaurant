import React, {useState, useEffect} from 'react';

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
                const restaurantsResult  = await API.graphql(
                    graphqlOperation(listRestaurants)
                )
                setRestaurants(restaurantsResult.data.listRestaurants.items)
                console.log(restaurantsResult.data.listRestaurants.items)
            }catch(error) {
                console.log(error)
            }
        }
        fetchRestaurants()
    }, [])

    return (
        <div>
            <LocationScreenHeader />
            <div style={{backgroundColor:'#08172E', marginTop:90,}}>

                <h3 style={{position:'relative', textAlign:'center', color:'#ffffff', padding:20}}>
                    Restaurants in Sandton
                </h3>
                {restaurants.map((item) => <RestaurantsList key={item.id} value={item} />)}
                
            </div>
        </div>
    );
}

export default LocationScreen;