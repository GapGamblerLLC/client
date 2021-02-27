import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import MarketSentiment from './MarketSentiment/pages/MarketSentiment';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path='/' exact>
            <MarketSentiment />
          </Route>
          <Redirect to='/' />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
