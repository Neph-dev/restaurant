import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom';

import HomePage from '../Pages/HomePage';
import RestaurantsPage from '../Pages/RestaurantsPage';


function Router() {
    return (
        <Routers>
            <Switch>           
                <Route exact path='/' component={HomePage} />
                <Route exact path='/Restaurants' component={RestaurantsPage} />
            </Switch>
        </Routers>
    );
}

export default Router;