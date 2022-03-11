import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom';

import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import LocationScreen from '../Screens/LocationScreen/LocationScreen';


function Router(props) {
    return (
        <Routers>
            <Switch>           
                <Route exact path='/' component={HomeScreen} />
                <Route exact path='/Location' component={LocationScreen} />
            </Switch>
        </Routers>
    );
}

export default Router;