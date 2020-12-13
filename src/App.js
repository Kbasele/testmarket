import './App.css';
import React from 'react'
import Crypto from './Pages/CryptoPage';
import Currencies from './Pages/CurrenciePage';
import Indexes from './Pages/Indexes';
import Markets from './Pages/MarketPage';
import {Route, Switch} from 'react-router-dom'
import Navigation from './Components/Navigation';
import HomePage from './Pages/HomePage';
import DetailedItem from './Components/DetailedItem';
import MarketItemDetailPage from './Pages/MarkedItemDetailedPage';
import NavigationStyled from './Components/NavigationStyled'

function App() {
  return (
    <div>
{/*         <Navigation showNavigation={true} showMarkets={true}/>
 */}            <Switch>

              <Route path="/crypto">
                  <Crypto/>
              </Route>
              <Route path="/Currencies">
                  <Currencies/>
              </Route>
              <Route path="/indexes">
                  <Indexes/>
              </Route>
              <Route path="/markets">
                  <Markets/>
              </Route>
              <Route path="/detailpage">
                <MarketItemDetailPage/>
              </Route>
              <Route path="/market/:market/:value" component={MarketItemDetailPage}/>
              <Route path="/">
                <HomePage/>
              </Route>
              
            </Switch>
    </div>
  );
}

export default App;
