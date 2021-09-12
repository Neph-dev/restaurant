import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Home/Header/Header';
import Main from './Components/Home/Body/Body';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Location from './Components/Location/Location';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header/>
          </Route>
          <Route exact path="/location">
            <Location/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
} 

export default App;
