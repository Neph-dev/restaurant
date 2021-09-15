import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

/* import screens for routing */
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import LocationScreen from './Screens/LocationScreen/LocationScreen';

/* amplify configuration imports */
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomeScreen/>
          </Route>
          <Route exact path="/location">
            <LocationScreen/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
} 

export default App;
